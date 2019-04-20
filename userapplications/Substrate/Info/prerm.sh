#!/bin/bash
echo "Trying to ejecting substrate loader from launchd..."
sudo launchctl unload /Library/LaunchAgents/com.zeone.substrateloader.plist
sudo rm /Library/LaunchAgents/com.zeone.substrateloader.plist
echo "Command finished."