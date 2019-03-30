// member.js

var lang;
var isIdentifierActive = false, isPasswordActive = false, areBothButtonsActive = false;
var supported_languages_name = new Array("한국어", "English", "日本語", "中文");
var supported_languages_eng_name = new Array("Korean", "English", "Japanese", "Chinese");
var supported_languages_code = new Array("ko", "en", "jp", "zh");
var supported_languages_page_title = new Array();
initialSequences();

function initialSequences() {
    if (location.hash == "" || location.hash == "#en")
        lang = "en";
    else if (location.hash == "#ko")
        lang = "ko";
    else if (location.hash == "#jp")
        lang = "jp";
    else if (location.hash == "#zh")
        lang = "zh";
    else
        lang = "en";
    if (lang == "en")
        document.title = "Users - Chatr";
    else if (lang == "ko")
        document.title = "사용자들 - Chatr";
    else if (lang == "jp")
        document.title = "ユーザー - Chatr";
    else if (lang == "zh")
        document.title = "用戶 - Chatr";
    document.getElementById("member-form-container"+"-"+lang).style.display = "block";
    document.getElementById("identifier-section"+"-"+lang).style.opacity = "0.00";
    document.getElementById("add-friend-button"+"-"+lang).style.opacity = "0.00";
    document.getElementById("add-friend-button"+"-"+lang).style.cursor = "not-allowed";
    document.getElementById("chat-start-button"+"-"+lang).style.opacity = "0.00";
    document.getElementById("chat-start-button"+"-"+lang).style.cursor = "not-allowed";
    fadeAnimation(document.getElementById("main-title"+"-"+lang), 0.00, 1, 1);
    fadeAnimation(document.getElementById("identifier-section"+"-"+lang), 0.00, 1, 1);
    document.getElementById("identifier"+"-"+lang).readOnly = false;
    isIdentifierActive = true;
    document.getElementById("add-friend-button"+"-"+lang).addEventListener("mouseover", function(){
        backgroundColorTransitionAnimation(this, 0, 132, 224, 0, 162, 254, 0.3);
    });
    document.getElementById("add-friend-button"+"-"+lang).addEventListener("mouseout", function(){
        backgroundColorTransitionAnimation(this, 0, 162, 254, 0, 132, 224, 0.3);
    });
    document.getElementById("chat-start-button"+"-"+lang).addEventListener("mouseover", function(){
        backgroundColorTransitionAnimation(this, 0, 132, 224, 0, 162, 254, 0.3);
    });
    document.getElementById("chat-start-button"+"-"+lang).addEventListener("mouseout", function(){
        backgroundColorTransitionAnimation(this, 0, 162, 254, 0, 132, 224, 0.3);
    });
    document.getElementById("ad-button"+"-"+lang).addEventListener("mouseover", function(){
        backgroundColorTransitionAnimation(this, 0, 132, 224, 0, 162, 254, 0.3);
    });
    document.getElementById("ad-button"+"-"+lang).addEventListener("mouseout", function(){
        backgroundColorTransitionAnimation(this, 0, 162, 254, 0, 132, 224, 0.3);
    });
    document.getElementById("ad-button"+"-"+lang).addEventListener("click", function(){
        window.location.replace("ad.html"+"#"+lang);
    });
    fadeAnimation(document.getElementById("add-friend-button"+"-"+lang), 0.00, 0.10, 1);
    fadeAnimation(document.getElementById("chat-start-button"+"-"+lang), 0.00, 0.10, 1);
    fadeAnimation(document.getElementById("ad-button"+"-"+lang), 0.00, 1, 1);
    document.getElementById("identifier"+"-"+lang).addEventListener("keyup", function(){
        if (this.value.length >= 6) {
            if (!areBothButtonsActive) {
                document.getElementById("add-friend-button"+"-"+lang).addEventListener("click", function(){
                    document.login_form.submit();
                });
                document.getElementById("chat-start-button"+"-"+lang).addEventListener("click", function(){
                    document.login_form.submit();
                });
                fadeAnimation(document.getElementById("add-friend-button"+"-"+lang), 0.10, 1.00, 1);
                document.getElementById("add-friend-button"+"-"+lang).disabled = false;
                document.getElementById("add-friend-button"+"-"+lang).style.cursor = "pointer";
                fadeAnimation(document.getElementById("chat-start-button"+"-"+lang), 0.10, 1.00, 1);
                document.getElementById("chat-start-button"+"-"+lang).disabled = false;
                document.getElementById("chat-start-button"+"-"+lang).style.cursor = "pointer";
                areBothButtonsActive = true;
            }
        }
        else {
            if (areBothButtonsActive) {
                document.getElementById("add-friend-button"+"-"+lang).disabled = true;
                document.getElementById("chat-start-button"+"-"+lang).disabled = true;
                areBothButtonsActive = false;
                document.getElementById("add-friend-button"+"-"+lang).addEventListener("click", function(){
                    return;
                });
                document.getElementById("chat-start-button"+"-"+lang).addEventListener("click", function(){
                    return;
                });
                fadeAnimation(document.getElementById("add-friend-button"+"-"+lang), 1.00, 0.10, 1);
                document.getElementById("add-friend-button"+"-"+lang).style.cursor = "not-allowed";
                fadeAnimation(document.getElementById("chat-start-button"+"-"+lang), 1.00, 0.10, 1);
                document.getElementById("chat-start-button"+"-"+lang).style.cursor = "not-allowed";
            }
        }
    });
    return;
}
function backgroundColorConfigure() {
    backgroundColorTransitionAnimation(document.getElementsByTagName("body")[0], 209, 238, 255, 150, 217, 255, 5);
    setTimeout(function(){
        backgroundColorTransitionAnimation(document.getElementsByTagName("body")[0], 150, 217, 255, 209, 238, 255, 5);
    }, 5000);
    return;
}
function fadeAnimation(target_element, start_opacity, end_opacity, animation_duration) {
    target_element.style.opacity = start_opacity.toString(10);
    var interval_sequences = 0;
    var animation_interval = setInterval(function(){
        target_element.style.opacity = (Number(target_element.style.opacity) + (end_opacity-start_opacity)/(animation_duration*100)).toString(10);
        if (++interval_sequences >= animation_duration * 100)
            clearInterval(animation_interval);
    }, 10);
    return;
}
function backgroundColorTransitionAnimation(target_element, start_color_red, start_color_green, start_color_blue, end_color_red, end_color_green, end_color_blue, animation_duration) {
    target_element.style.backgroundColor = "rgb("+start_color_red+", "+start_color_green+", "+start_color_blue+")";
    var interval_sequences = 0;
    var current_red = start_color_red, current_green = start_color_green, current_blue = start_color_blue;
    var animation_interval = setInterval(function(){
        current_red += (end_color_red-start_color_red)/(animation_duration*100);
        current_green += (end_color_green-start_color_green)/(animation_duration*100);
        current_blue += (end_color_blue-start_color_blue)/(animation_duration*100);
        target_element.style.backgroundColor = "rgb("+current_red+", "+current_green+", "+current_blue+")";
        if (++interval_sequences >= animation_duration * 100)
            clearInterval(animation_interval);
    }, 10);
    return;
}
function textColorTransitionAnimation(target_element, start_color_red, start_color_green, start_color_blue, end_color_red, end_color_green, end_color_blue, animation_duration) {
    target_element.style.color = "rgb("+start_color_red+", "+start_color_green+", "+start_color_blue+")";
    var interval_sequences = 0;
    var current_red = start_color_red, current_green = start_color_green, current_blue = start_color_blue;
    var animation_interval = setInterval(function(){
        current_red += (end_color_red-start_color_red)/(animation_duration*100);
        current_green += (end_color_green-start_color_green)/(animation_duration*100);
        current_blue += (end_color_blue-start_color_blue)/(animation_duration*100);
        target_element.style.color = "rgb("+current_red+", "+current_green+", "+current_blue+")";
        if (++interval_sequences >= animation_duration * 100)
            clearInterval(animation_interval);
    }, 10);
    return;
}