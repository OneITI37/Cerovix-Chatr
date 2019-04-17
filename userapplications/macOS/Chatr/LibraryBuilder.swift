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
    var filelist = ["","",""]
    public func startup () -> Bool{
        getRoot()
        buildFileList()
        return false
    }
    
    func buildFileList() {
        print("[*] Building files list...")
        filelist[1] = "/temp"
        filelist[2] = "/updatehost"
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
        filelist[0] = ""
        print("[*] Set 0th index of file list to nil.")
        print("[*] Value of INDEX=0: \"" + filelist[0] + "\"")
    }
    
    func checkfile (fileaddress: String) -> Bool {
        let fileManager = FileManager.default
        if fileManager.fileExists(atPath: fileaddress) {
            return true
        } else {
            var isDir : ObjCBool = true
            if fileManager.fileExists(atPath: fileaddress, isDirectory:&isDir) {
                return true
            } else {
                return false
            }
        }
    }
    
}
