//
//  LibraryBuilder.swift
//  Chatr
//
//  Created by Hoyoun Song on 26/03/2019.
//  Copyright © 2019 Hoyoun Song. All rights reserved.
//

import Foundation
class LibraryBuilder {
    
    public func startup () -> Bool{
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
    
    func checklib () -> Bool{
        var filemissing = true
        var loop = 0
        while loop < 3 {
            loop = loop + 1
            if !checkfile(fileaddress: "") {
                filemissing = true
            }
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
        return true
    }
    
}
