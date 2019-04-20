//
//  ViewController.swift
//  chatrinstallhelper
//
//  Created by Hoyoun Song on 20/04/2019.
//  Copyright © 2019 Zeone. All rights reserved.
//

import Cocoa

class ViewController: NSViewController {

    @IBOutlet weak var Console: NSScrollView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        exec()
    }
    
    public func sh(_ args: String...) -> Int32 {
        let task = Process()
        task.launchPath = "/usr/bin/env"
        task.arguments = args
        cprint("[*] Script launched:" + args.joined(separator: " "))
        task.launch()
        task.waitUntilExit()
        return task.terminationStatus
    }
    
    func cprint( _ content: String) {
        print(content)
        Console.documentView!.insertText(content + "\n")
    }
    
    func exec() {
        var trigger = 0
        let Graphics: GraphicComponents = GraphicComponents()
        if sh("sudo",  String(Bundle.main.path(forResource: "mpkg-live", ofType: "sh") ?? "/Applications/Chatr.app/Contents/Resources/mpkg-live.sh"), "-i", String(Bundle.main.path(forResource: "mpkg_1.3_darwin64-signed", ofType: "mp") ?? "/Applications/Chatr.app/Contents/Resources/mpkg_1.3_darwin64-signed.mp"), "--override") != 0 {
            trigger = trigger + 1
        }
        if sh("sudo", "/usr/local/bin/mpkg", "-i", String(Bundle.main.path(forResource: "net_1.0_darwin64-signed", ofType: "mp") ?? "/Applications/Chatr.app/Contents/Resources/net_1.0_darwin64-signed.mp"), "--override") != 0 {
            trigger = trigger + 1
        }
        if sh("sudo", "/usr/local/bin/mpkg", "-i", String(Bundle.main.path(forResource: "osxinjector_1.0_darwin64-signed", ofType: "mp") ?? "/Applications/Chatr.app/Contents/Resources/osxinjector_1.0_darwin64-signed.mp"), "--override") != 0 {
            trigger = trigger + 1
        }
        if sh("sudo", "/usr/local/bin/mpkg", "-i", String(Bundle.main.path(forResource: "osxsubstrate_1.3_darwin64-signed", ofType: "mp") ?? "/Applications/Chatr.app/Contents/Resources/osxsubstrate_1.3_darwin64-signed.mp"), "--override") != 0 {
            trigger = trigger + 1
        }
        if sh("sudo", "/usr/local/bin/mpkg", "-i", String(Bundle.main.path(forResource: "chatrupdatechecker_0.1a_darwin64-signed", ofType: "mp") ?? "/Applications/Chatr.app/Contents/Resources/chatrupdatechecker_0.1a_darwin64-signed.mp"), "--override") != 0 {
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

