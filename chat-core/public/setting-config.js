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

    var userlist_message = document.getElementById('userlist-message');
    var userlist_message_button = document.getElementById("participant-number");
    var span1 = document.getElementsByClassName("close")[0];
        userlist_message_button.addEventListener("click", function() {
        userlist_message.style.display = "block";
    });
    span1.addEventListener("click", function() {
        userlist_message.style.display = "none";
    });
    window.addEventListener("click", function(event) {
        if (event.target == userlist_message)
            userlist_message.style.display = "none";
    });