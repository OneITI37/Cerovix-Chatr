//
//  InstallBootstrap.swift
//  WhiteCrasher
//
//  Created by Hoyoun Song on 29/03/2019.
//  Copyright © 2019 zeone. All rights reserved.
//

import Foundation
class InstallBootstrap {
    let Graphics: GraphicComponents = GraphicComponents()
    let System: SystemLevelCompatibilityLayer = SystemLevelCompatibilityLayer()
    
    public func start() {
        if !System.checkFile(pathway: "/usr/local/mpkg/db/com.zeone.chatr-updatehelper"){
            let RootFS: RootFSAccess = RootFSAccess()
            let rootAccessible = RootFS.start()
            if rootAccessible {
                doInstall()
            }else{
                if System.sh("/usr/bin/automator", String(Bundle.main.path(forResource: "getsu", ofType: "workflow") ?? "/Applications/Chatr.app/Contents/Resources/getsu.workflow")) != 0 {
                    print("[-] System Failure.")
                    exit(-9)
                }
            }
        }else{
            print("[*] Already installed.")
        }
    }
    
    func doInstall (){
        var trigger = 0
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
            Graphics.msgBox_Message(title: "Installation Successful", contents: "Bootstraps are installed successfully. Please relaunch the tool.")
            exit(0)
        }else{
            Graphics.msgBox_errorMessage(title: "Installation Failure", contents: String(trigger) + " out of 5 bootstrap component installation failure. Please contact to the developer.")
            exit(-9)
        }
    }
}
