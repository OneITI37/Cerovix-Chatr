//
//  RootFSAccess.swift
//  WhiteCrasher
//
//  Created by Hoyoun Song on 30/03/2019.
//  Copyright © 2019 Cerovix. All rights reserved.
//

import Foundation
class RootFSAccess{
    public func start () -> Bool {
        let System: SystemLevelCompatibilityLayer = SystemLevelCompatibilityLayer()
        print("[*] Testing for R/W RootFS...")
        if System.sh("sudo", "touch", "/file") != 0 {
            return false
        }else{
            let _ = System.sh("sudo", "rm", "/file")
            return true
        }
    }
}
