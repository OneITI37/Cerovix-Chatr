#!/bin/bash
args=$1
pkg=$2
ROOTFS="/"
LIBRARY=$ROOTFS"usr/local/mpkglib"
SEDLIB="\\/usr\\/local\\/mpkglib\\/temp\\/Payload\\/"
if [[ -z $args ]]; then
	$LIBRARY/binary/mpkg-manual
	exit
fi
echo "Running Macintosh Packager-live..."
if [ "$EUID" -ne 0 ]; then 
	echo "Not enough permission!"
 	exit
fi
sudo mkdir $LIBRARY
sudo mkdir $LIBRARY/temp
if [[ -z $(echo $pkg|grep ".mp") ]]; then
	echo "E:36"
	echo "It is not a mpkg package!"
	exit
else
	echo "Locking mpkg..."
	sudo touch $LIBRARY/lock
	echo "Unpacking..."
	if [ ! -e $LIBRARY/temp ]; then
		sudo mkdir $LIBRARY/temp
	else
		echo "W:30"
		echo "It seems last process uncleanly finished..."
		sudo rm -r $LIBRARY/temp
		sudo mkdir $LIBRARY/temp
	fi
	cp $pkg $LIBRARY/temp/
	if [ ! -e $LIBRARY/temp/*.mp ]; then
		echo "E:31"
		echo "Failed to unpack."
		sudo rm -r $LIBRARY/temp
		sudo rm $LIBRARY/lock
		exit
	fi
	mv $LIBRARY/temp/*.mp $LIBRARY/temp/package.zip
	unzip -qq $LIBRARY/temp/package.zip -d $LIBRARY/temp
	if [ ! -e $LIBRARY/temp/Info.zip ]; then
		echo "E:22"
		echo "Package Corruption (No Control Cluster). Unable to continue."
		sudo rm -r $LIBRARY/temp
		sudo rm $LIBRARY/lock
		exit
	fi
	if [ ! -e $LIBRARY/temp/Payload.zip ]; then
		echo "E:23"
		echo "Package Corruption (No Payload). Unable to continue."
		sudo rm -r $LIBRARY/temp
		sudo rm $LIBRARY/lock
		exit
	fi
	mkdir $LIBRARY/temp/Info
	unzip -qq $LIBRARY/temp/Info.zip -d $LIBRARY/temp/Info
fi
if [[ ! -e $LIBRARY/temp/Info/pkgsign ]]; then
	if [[ $4 == "--nosignaturecheck" ]]; then
		echo "Skipped signature check."
		echo "!!!!INSTALLING UNSIGNED PACKAGE MAY BE DANGEROUS!!!!"
	else
		echo "E:20"
		echo "No signature file."
		sudo rm -r $LIBRARY/temp
		sudo rm $LIBRARY/lock
		exit
	fi
else
	if [[ -z $(<$LIBRARY/temp/Info/pkgsign) ]]; then
		if [[ $4 == "--nosignaturecheck" ]]; then
			echo "Skipped signature check."
			echo "!!!!INSTALLING UNSIGNED PACKAGE MAY BE DANGEROUS!!!!"
		else
			echo "E:27"
			echo "Empty signature data. Unable to continue."
			sudo rm -r $LIBRARY/temp
			sudo rm $LIBRARY/lock
			exit
		fi
	else
		signdat=$(<$LIBRARY/temp/Info/pkgsign)
		if [[ -z $(md5 $LIBRARY/temp/Payload.zip | grep $signdat) ]]; then
			if [[ $4 == "--nosignaturecheck" ]]; then
				echo "Skipped signature check."
				echo "!!!!INSTALLING UNSIGNED PACKAGE MAY BE DANGEROUS!!!!"
			else
				echo "E:21"
				echo "Invalid signature data. Unable to continue."
				sudo rm -r $LIBRARY/temp
				sudo rm $LIBRARY/lock
				exit
			fi
		fi
	fi
	mkdir $LIBRARY/temp/Payload
	unzip -qq $LIBRARY/temp/Payload.zip -d $LIBRARY/temp/Payload
fi
if [[ ! -e $LIBRARY/temp/Info/pkgname ]]; then
	echo "E:37"
	echo "Package Corruption (No PN control). Unable to continue."
	sudo rm -r $LIBRARY/temp
	sudo rm $LIBRARY/lock
	exit
elif [[ ! -e $LIBRARY/temp/Info/version ]]; then
	echo "E:38"
	echo "Package Corruption (No Version control). Unable to continue."
	sudo rm -r $LIBRARY/temp
	sudo rm $LIBRARY/lock
	exit
elif [[ ! -e $LIBRARY/temp/Info/pkgid ]]; then
	echo "E:38"
	echo "Package Corruption (No PI control). Unable to continue."
	sudo rm -r $LIBRARY/temp
	sudo rm $LIBRARY/lock
	exit
elif [[ ! -e $LIBRARY/temp/Payload ]]; then
	echo "E:39"
	echo "Package Corruption (No payload). Unable to continue."
	sudo rm -r $LIBRARY/temp
	sudo rm $LIBRARY/lock
	exit
fi
if [[ -e $LIBRARY/temp/Info/depends ]]; then
	echo "This package depends: "$(<$LIBRARY/temp/Info/depends)
	if [[ -z $(cat $LIBRARY/db/installed | grep $(</$LIBRARY/temp/Info/depends)) ]]; then
		echo "Dependency \""$(<$LIBRARY/temp/Info/depends)"\" is not installed."
		exit
	fi
fi
echo "Installing "$(<$LIBRARY/temp/Info/pkgname)"..."
echo "Selecting "$(<$LIBRARY/temp/Info/pkgid) $(<$LIBRARY/temp/Info/version)" to install..."
if [[ ! -z $(cat $LIBRARY/db/installed | grep $(<$LIBRARY/temp/Info/pkgid)) ]]; then
	echo $(<$LIBRARY/temp/Info/pkgid) "is already installed."
	if [[ $(<$LIBRARY/db/$(<$LIBRARY/temp/Info/pkgid)/version) == $(<$LIBRARY/temp/Info/version) ]]; then
		if [[ $3 == "--override" ]]; then
			echo "Reinstalling package..."
		else
			echo "E:26"
			echo $(<$LIBRARY/temp/Info/pkgid) "is already installed with same version."
			echo "Process stopped for package protection."
			echo "To override, add --override after the package address."
			sudo rm -r $LIBRARY/temp
			sudo rm $LIBRARY/lock
			exit
		fi
	else
		echo "Upgrading package..."
	fi
else
	echo "This package is not installed yet."
fi
if [[ -e $LIBRARY/temp/Info/preinst.sh ]]; then
	echo "Running preinst..."
	sudo $LIBRARY/temp/Info/preinst.sh
fi
echo "Removing Finder Elements..."
sudo find $LIBRARY/temp -name ".DS_Store" -exec rm {} \;
echo "Installing..."
sudo cp -r $LIBRARY/temp/Payload/* $ROOTFS
if [[ -e $LIBRARY/temp/Info/postinst.sh ]]; then
	echo "Running postinst..." 
	sudo $LIBRARY/temp/Info/postinst.sh
fi
echo "Installing controls..."
if [[ ! -e $LIBRARY/db/$(<$LIBRARY/temp/Info/pkgid) ]]; then
	sudo mkdir $LIBRARY/db/$(<$LIBRARY/temp/Info/pkgid)
fi
sudo cp $LIBRARY/temp/Info/* $LIBRARY/db/$(<$LIBRARY/temp/Info/pkgid)/
sudo echo $(cat $LIBRARY/temp/Info/pkgid)>>$LIBRARY/db/installed
echo "Writing connected files to database..."
sudo find $LIBRARY/temp/Payload -not -type d | grep $LIBRARY/temp/Payload > $LIBRARY/db/$(<$LIBRARY/temp/Info/pkgid)/files
sudo sed -i '' s/$SEDLIB/\\// $LIBRARY/db/$(<$LIBRARY/temp/Info/pkgid)/files
sudo sed -i '' s/Thumbs.db// $LIBRARY/db/$(<$LIBRARY/temp/Info/pkgid)/files
sudo sed -i '' s/.DS_Store// $LIBRARY/db/$(<$LIBRARY/temp/Info/pkgid)/files
sudo sed -i '' s/\\/usr\\/local\\/mpkglib\\/temp\\/Payload// $LIBRARY/db/$(<$LIBRARY/temp/Info/pkgid)/files
echo "Analysis written to database."
echo "Finished installing:" $(<$LIBRARY/temp/Info/pkgname) $(<$LIBRARY/temp/Info/version)
echo "Cleaning up..."
sudo rm -r $LIBRARY/temp
sudo rm $LIBRARY/lock
exit
