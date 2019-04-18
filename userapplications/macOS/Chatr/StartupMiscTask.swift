//
//  StartupMiscTask.swift
//  Chatr
//
//  Created by Hoyoun Song on 18/04/2019.
//  Copyright © 2019 Hoyoun Song. All rights reserved.
//

import Foundation
class StartupMiscTask{
    public func start() {
        let libmgr: LibraryBuilder = LibraryBuilder()
        if !libmgr.startup(){
            let makeboot: InstallBootstrap = InstallBootstrap()
            makeboot.doInstall()
        }
    }
}
