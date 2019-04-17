//
//  GraphicComponents.swift
//  WhiteCrasher
//
//  Created by Hoyoun Song on 29/03/2019.
//  Copyright © 2019 Hoyoun Song. All rights reserved.
//

import Cocoa
import Foundation
class GraphicComponents {
    @discardableResult
    public func msgBox_errorMessage(title: String, contents: String) -> Bool {
        let alert = NSAlert()
        alert.messageText = title
        alert.informativeText = contents
        alert.alertStyle = .critical
        alert.addButton(withTitle: "Dismiss")
        return alert.runModal() == .alertFirstButtonReturn
    }
    
    // Info Message Box
    @discardableResult
    public func msgBox_Message(title: String, contents: String) -> Bool {
        let alert = NSAlert()
        alert.messageText = title
        alert.informativeText = contents
        alert.alertStyle = .informational
        alert.addButton(withTitle: "Dismiss")
        return alert.runModal() == .alertFirstButtonReturn
    }
}
