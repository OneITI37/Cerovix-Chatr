// index.js

    var lang;
    var isIdentifierActive = false, isPasswordActive = false, isLoginButtonActive = false;
    var supported_languages_name = new Array("한국어", "English", "日本語", "中文");
    var supported_languages_eng_name = new Array("Korean", "English", "Japanese", "Chinese");
    var supported_languages_code = new Array("ko", "en", "jp", "zh");
    var supported_languages_page_title = new Array();
    var switchLanguageDisplayInterval = setInterval(switchLanguageDisplay, 3700);
    var currentLanguageDisplay = 0;
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
        document.title = "Sign in - Chatr";
    else if (lang == "ko")
        document.title = "로그인 - Chatr";
    else if (lang == "jp")
        document.title = "ログイン - Chatr";
    else if (lang == "zh")
        document.title = "登錄 - Chatr";
    document.getElementsByClassName("index-container")[0].style.display = "block";
    for (i = 0; i < document.getElementsByClassName("signin-button").length; i++) {
        document.getElementsByClassName("signin-button")[i].addEventListener("mouseover", function(){
            backgroundColorTransitionAnimation(this, 0, 132, 224, 0, 162, 254, 0.3);
        });
        document.getElementsByClassName("signin-button")[i].addEventListener("mouseout", function(){
            backgroundColorTransitionAnimation(this, 0, 162, 254, 0, 132, 224, 0.3);
        });
        document.getElementsByClassName("signin-button")[i].addEventListener("click", function(){
            window.location.href = "signin.html";
        });
    }
    for (i = 0; i < document.getElementsByClassName("signup-button").length; i++) {
        document.getElementsByClassName("signup-button")[i].addEventListener("mouseover", function(){
            backgroundColorTransitionAnimation(this, 0, 132, 224, 0, 162, 254, 0.3);
        });
        document.getElementsByClassName("signup-button")[i].addEventListener("mouseout", function(){
            backgroundColorTransitionAnimation(this, 0, 162, 254, 0, 132, 224, 0.3);
        });
        document.getElementsByClassName("signup-button")[i].addEventListener("click", function(){
            window.location.href = "signup.html";
        });
    }
    document.getElementById("terms-and-conditions-common").addEventListener("mouseover", function(){
        textColorTransitionAnimation(this, 0, 120, 215, 40, 160, 255, 0.3);
    });
    document.getElementById("terms-and-conditions-common").addEventListener("mouseout", function(){
        textColorTransitionAnimation(this, 40, 160, 255, 0, 120, 215, 0.3);
    });
    return;
}
function switchLanguageDisplay() {
    fadeAnimation(document.getElementsByClassName("index-container")[currentLanguageDisplay], 1.00, 0.10, 0.5);
    currentLanguageDisplay++;
    if (currentLanguageDisplay > 3)
        currentLanguageDisplay = 0;
    for (i = 0; i < document.getElementsByClassName("index-container").length; i++)
        document.getElementsByClassName("index-container")[i].style.display = "none";
    document.getElementsByClassName("index-container")[currentLanguageDisplay].style.display = "block";
    fadeAnimation(document.getElementsByClassName("index-container")[currentLanguageDisplay], 0.10, 1.00, 0.5);
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