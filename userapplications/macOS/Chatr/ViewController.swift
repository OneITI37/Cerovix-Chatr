//
//  ViewController.swift
//  Chatr
//
//  Created by Hoyoun Song on 24/03/2019.
//  Copyright © 2019 Hoyoun Song. All rights reserved.
//
import Cocoa
import WebKit

class ViewController: NSViewController, WKUIDelegate, WKNavigationDelegate {
    
    public static let version = "0.1 Alpha"
    public static let dversion = 0.1
    let webView = WKWebView()
    var height = 610.0
    var width = 1200.0
    var Server1 = "https://zeone-chatr.firebaseapp.com/"
    var Server2 = "http://58.78.142.179:3000"
    var OnlineServer = "http://58.78.142.179/substitute/onlinemark"
    var selectedServer = 0
    @IBOutlet weak var ServerIndicator: NSSegmentedControl!
    
    override func viewDidLoad() {
//        let smisctask: StartupMiscTask = StartupMiscTask()
//        smisctask.start()
        selectedServer = ServerIndicator.indexOfSelectedItem
        load()
        super.viewDidLoad()
    }
    
    @IBAction func SelectionDetector(_ sender: Any) {
        selectedServer = ServerIndicator.indexOfSelectedItem
        load()
    }
    
    func load() {
        if isServerOnline() {
            self.webView.uiDelegate = self
            self.webView.navigationDelegate = self
            webView.frame = CGRect(x: 0, y: 0, width: Int(width), height: Int(height))
            view.addSubview(webView)
            var url = URL(string: "")
            if selectedServer == 0 {
                url = URL(string: Server1)
            }else{
                url = URL(string: Server2)
            }
            let request = URLRequest(url: url!)
            webView.load(request)
        }else{
            let Graphics: GraphicComponents = GraphicComponents()
            Graphics.msgBox_errorMessage(title: "Server Seems Down", contents: "The server seems down for a moment. Please try another server.")
        }
    }
    
    func isServerOnline() -> Bool {
        let System: SystemLevelCompatibilityLayer = SystemLevelCompatibilityLayer()
        let _ = System.sh("curl", "-Ls", OnlineServer, "-o", "~/Library/serveronline")
        if System.fileReader(pathway: System.getHomeDirectory() + "Library/serveronline").elementsEqual("online!"){
            return true
        }else{
            return false
        }
    }
}
