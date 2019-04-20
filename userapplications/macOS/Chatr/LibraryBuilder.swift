//
//  LibraryBuilder.swift
//  Chatr
//
//  Created by Hoyoun Song on 26/03/2019.
//  Copyright © 2019 Hoyoun Song. All rights reserved.
//

import Foundation
class LibraryBuilder {
    var vrootfs = ""
    public func startup (){
        getRoot()
        print("[*] Checking App Installation...")
        let System: SystemLevelCompatibilityLayer = SystemLevelCompatibilityLayer()
        if !System.checkFile(pathway: "/Applications/Chatr.app"){
            print("[*] Bundle is not installed.")
            let Graphics: GraphicComponents = GraphicComponents()
            Graphics.msgBox_errorMessage(title: "Application is not installed", contents: "Please move the application to /Applications to work.")
            exit(-9)
        }else{
            print("[*] Bundle is installed.")
        }
    }
    
    func getRoot() {
        print("[*] Finding user directory...")
        var homeurl = FileManager.default.homeDirectoryForCurrentUser.absoluteString
        if homeurl.contains("file://"){
            homeurl = homeurl.replacingOccurrences(of: "file://", with: "")
        }
        print("[+] Found user directory: " + homeurl)
        vrootfs = homeurl + "Library/Application Support/Chatr"
        print("[*] Set vrootfs to: " + vrootfs)
    }
}
