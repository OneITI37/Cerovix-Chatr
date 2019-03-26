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
    var filelist = Array<String>()
    var missingfilelist = Array<String>()
    public func startup () -> Bool{
        getRoot()
        buildFileList()
        if checklib() {
            return true
        }else{
            if makelib() {
                return true
            }else{
                return false
            }
        }
    }
    
    func buildFileList() {
        print("[*] Building files list...")
        filelist[1] = "/logincache"
        filelist[2] = "/updatehost"
        filelist[3] = "/"
        filelist[4] = ""
        filelist[5] = ""
        
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
    
    func checklib () -> Bool{
        var filemissing = true
        var loop = 0
        while loop < 3 {
            filelist[loop] = vrootfs + filelist[loop]
            if !checkfile(fileaddress: filelist[loop]) {
                print("[-] Missing: " + filelist[loop])
                filemissing = true
                missingfilelist[missingfilelist.endIndex + 1] = filelist[loop]
            }else{
                print("[+] Verified: " + filelist[loop])
            }
            loop = loop + 1
        }
        return filemissing
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
    
    func makelib () -> Bool {
        print("[*] Building missing library files...")
        return true
    }
    
}
