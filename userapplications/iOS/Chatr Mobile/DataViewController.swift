//
//  DataViewController.swift
//  Chatr Mobile
//
//  Created by Hoyoun Song on 26/03/2019.
//  Copyright © 2019 Cerovix. All rights reserved.
//

import UIKit
import WebKit

class DataViewController: UIViewController, WKUIDelegate, WKNavigationDelegate {

    @IBOutlet weak var webView: WKWebView!
    @IBOutlet weak var dataLabel: UILabel!
    var dataObject: String = ""


    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        self.dataLabel!.text = dataObject
    }


}

