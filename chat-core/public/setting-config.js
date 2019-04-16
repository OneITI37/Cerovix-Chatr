    document.getElementById("notification-sound-option").addEventListener("change", function(){
        if (this.value == "on")
            document.getElementById("notification-sound-setting").value = "true";
        else
            document.getElementById("notification-sound-setting").value = "false";
    });
    Notification.requestPermission(function (permission) {
        if (permission === "granted") {
            document.getElementById("notification-browser-option").selectedIndex = 1;
            document.getElementById("notification-browser-setting").value = "true";
        }
        else {
            document.getElementById("notification-browser-option").selectedIndex = 0;
            document.getElementById("notification-browser-setting").value = "false";
        }
    });
    document.getElementById("notification-browser-option").addEventListener("change", function(){
        if (this.value == "on") {
            Notification.requestPermission(function (permission) {
                if (permission === "granted")
                    document.getElementById("notification-browser-setting").value = "true";
                else {
                    document.getElementById("notification-browser-option").selectedIndex = 0;
                    document.getElementById("notification-browser-setting").value = "false";
                }
            });
        }
        else
            document.getElementById("notification-browser-setting").value = "false";
    });
    /*
    document.getElementsByClassName("messages")[0].addEventListener("mouseover", function(){
        this.style.overflow = "visible";
    });
    document.getElementsByClassName("messages")[0].addEventListener("mouseout", function(){
        this.style.overflow = "hidden";
    });
    */