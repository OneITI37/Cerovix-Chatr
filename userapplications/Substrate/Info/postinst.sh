#!/bin/bash
echo "Trying to inject substrate loader to launchd using osxinject..."
sudo osxinject /usr/local/substratelib/com.zeone.substrateloader.plist
echo "Hooking..."
sudo launchctl load /Library/LaunchAgents/com.zeone.substrateloader.plist
echo "Command finished."