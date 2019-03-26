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
    
    let webView = WKWebView()
    var height = 700
    var width = 700
    var loaderAddress = "http://login.chatr.kro.kr"
    
    override func viewDidLoad() {
        super.viewDidLoad()
        getScreenSize()
        load()
    }
    
    func getScreenSize() {
        height = 700
        width = 1200
    }
    
    func loadCache () {
        
    }
    
    func load() {
        self.webView.uiDelegate = self
        self.webView.navigationDelegate = self
        webView.frame = CGRect(x: 0, y: 0, width: width, height: height)
        view.addSubview(webView)
        let url = URL(string: loaderAddress)
        let request = URLRequest(url: url!)
        webView.load(request)
    }
}
