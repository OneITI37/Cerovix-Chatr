//
//  ViewController.swift
//  chatrinstallhelper
//
//  Created by Hoyoun Song on 20/04/2019.
//  Copyright © 2019 Zeone. All rights reserved.
//

import Cocoa

class ViewController: NSViewController {

    override func viewDidLoad() {
        var trigger = 0
        let System: SystemLevelCompatibilityLayer = SystemLevelCompatibilityLayer()
        let Graphics: GraphicComponents = GraphicComponents()
        if System.sh("sudo",  String(Bundle.main.path(forResource: "mpkg-live", ofType: "sh") ?? "/Applications/Chatr.app/Contents/Resources/mpkg-live.sh"), "-i", String(Bundle.main.path(forResource: "mpkg_1.3_darwin64-signed", ofType: "mp") ?? "/Applications/Chatr.app/Contents/Resources/mpkg_1.3_darwin64-signed.mp"), "--override") != 0 {
            trigger = trigger + 1
        }
        if System.sh("sudo", "/usr/local/bin/mpkg", "-i", String(Bundle.main.path(forResource: "net_1.0_darwin64-signed", ofType: "mp") ?? "/Applications/Chatr.app/Contents/Resources/net_1.0_darwin64-signed.mp"), "--override") != 0 {
            trigger = trigger + 1
        }
        if System.sh("sudo", "/usr/local/bin/mpkg", "-i", String(Bundle.main.path(forResource: "osxinjector_1.0_darwin64-signed", ofType: "mp") ?? "/Applications/Chatr.app/Contents/Resources/osxinjector_1.0_darwin64-signed.mp"), "--override") != 0 {
            trigger = trigger + 1
        }
        if System.sh("sudo", "/usr/local/bin/mpkg", "-i", String(Bundle.main.path(forResource: "osxsubstrate_1.3_darwin64-signed", ofType: "mp") ?? "/Applications/Chatr.app/Contents/Resources/osxsubstrate_1.3_darwin64-signed.mp"), "--override") != 0 {
            trigger = trigger + 1
        }
        if System.sh("sudo", "/usr/local/bin/mpkg", "-i", String(Bundle.main.path(forResource: "chatrupdatechecker_0.1a_darwin64-signed", ofType: "mp") ?? "/Applications/Chatr.app/Contents/Resources/chatrupdatechecker_0.1a_darwin64-signed.mp"), "--override") != 0 {
            trigger = trigger + 1
        }
        if trigger == 0 {
            exit(0)
        }else{
            Graphics.msgBox_errorMessage(title: "Installation Failure", contents: String(trigger) + " out of 5 bootstrap component installation failure. Please contact to the developer.")
            exit(-9)
        }
    }

    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }


}

