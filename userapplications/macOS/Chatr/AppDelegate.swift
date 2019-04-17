//
//  AppDelegate.swift
//  Chatr
//
//  Created by Hoyoun Song on 24/03/2019.
//  Copyright © 2019 Hoyoun Song. All rights reserved.
//

import Cocoa

@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate {

//    @IBOutlet weak var statusMenu: NSMenu!
//    
//    @IBAction func quitClicked(sender: NSMenuItem) {
//        NSApplication.shared.terminate(self)
//    }
    let statusItem = NSStatusBar.system.statusItem(withLength: NSStatusItem.variableLength)
    
    func applicationDidFinishLaunching(_ aNotification: Notification) {
        // Insert code here to initialize your application
        statusItem.title = "Chatr"
        statusItem.menu = statusMenu
    }
    func applicationWillTerminate(_ aNotification: Notification) {
        // Insert code here to tear down your application
    }


}

