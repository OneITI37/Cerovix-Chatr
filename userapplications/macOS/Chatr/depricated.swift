////
////  ViewController.swift
////  Chatr
////
////  Created by Hoyoun Song on 24/03/2019.
////  Copyright © 2019 Hoyoun Song. All rights reserved.
////
//import Cocoa
//import WebKit
//
//class ViewController: NSViewController, WKUIDelegate, WKNavigationDelegate {
//
//    let webView = WKWebView()
//    var height = 610.0
//    var width = 1200.0
//    var loaderAddress = "https://zeone-nameless-17apr2019.localtunnel.me"
//
//    override func viewDidLoad() {
//        super.viewDidLoad()
//        load()
//    }
//
//    func load() {
//        self.webView.uiDelegate = self
//        self.webView.navigationDelegate = self
//        webView.frame = CGRect(x: 0, y: 0, width: Int(width), height: Int(height))
//        view.addSubview(webView)
//        let url = URL(string: loaderAddress)
//        let request = URLRequest(url: url!)
//        webView.load(request)
//    }
//}
