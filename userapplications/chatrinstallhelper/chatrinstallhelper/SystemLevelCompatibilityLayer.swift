//
//  SystemLevelCompatibilityLayer.swift
//  WhiteCrasher
//
//  Created by Hoyoun Song on 29/03/2019.
//  Copyright © 2019 Hoyoun Song. All rights reserved.
//

import Foundation
class SystemLevelCompatibilityLayer {
    
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
