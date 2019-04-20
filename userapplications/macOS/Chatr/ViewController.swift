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
    var Server1 = "http://220.124.253.51:3000"
    var Server2 = "http://58.78.142.179:3000"
    var Server3 = "http://:3000"
    var selectedServer = 0
    @IBOutlet weak var ServerIndicator: NSSegmentedControl!
    
    override func viewDidLoad() {
        let smisctask: StartupMiscTask = StartupMiscTask()
        smisctask.start()
        selectedServer = ServerIndicator.indexOfSelectedItem
        load()
        super.viewDidLoad()
    }
    
    @IBAction func SelectionDetector(_ sender: Any) {
        selectedServer = ServerIndicator.indexOfSelectedItem
        load()
    }
    
    func load() {
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
    }
}
