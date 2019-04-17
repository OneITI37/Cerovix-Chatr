//
//  SystemLevelCompatibilityLayer.swift
//  WhiteCrasher
//
//  Created by Hoyoun Song on 29/03/2019.
//  Copyright © 2019 Hoyoun Song. All rights reserved.
//

import Foundation
class SystemLevelCompatibilityLayer {
    public func sh(_ args: String...) -> Int32 {
        let task = Process()
        task.launchPath = "/usr/bin/env"
        task.arguments = args
        print("[*] Script launched:", args.joined(separator: " "))
        task.launch()
        task.waitUntilExit()
        return task.terminationStatus
    }
    
    public func runmpkg(_ args: String...) -> Int32{
        print("[*] Running Macintosh Packager...")
        let returncode = sh("sudo", "/usr/local/bin/mpkg", args[0], args[1])
        return returncode
    }
    
    public func checkFile(pathway: String) -> Bool {
        let fileManager = FileManager.default
        if fileManager.fileExists(atPath: pathway) {
            return true
        } else {
            var isDir : ObjCBool = true
            if fileManager.fileExists(atPath: pathway, isDirectory:&isDir) {
                return true
            } else {
                return false
            }
        }
    }
    
    public func fileReader(pathway: String) -> String {
        if !checkFile(pathway: pathway) {
            return "returned:nofile"
        }else{
            do{
                let filepath = URL.init(fileURLWithPath: pathway)
                let content = try String(contentsOf: filepath, encoding: .utf8)
                return content
            }catch{
                exit(1)
            }
        }
    }
    
    public func getHomeDirectory() -> String{
        let fsutil = FileManager.default
        var homeurl = fsutil.homeDirectoryForCurrentUser.absoluteString
        if homeurl.contains("file://"){
            homeurl = homeurl.replacingOccurrences(of: "file://", with: "")
        }
        return homeurl
    }
    
}
