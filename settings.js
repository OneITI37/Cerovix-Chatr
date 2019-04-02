// settings.js

    var lang;
    var isIdentifierActive = false, isPasswordActive = false, issettingButtonActive = false;
    var supported_languages_name = new Array("한국어", "English", "日本語", "中文");
    var supported_languages_eng_name = new Array("Korean", "English", "Japanese", "Chinese");
    var supported_languages_code = new Array("ko", "en", "jp", "zh");
    var supported_languages_page_title = new Array();

    var isNotificationBrowserOptionExpanded = false;
    var isNotificationRingtoneOptionExpanded = false;
    var isNotificationRingtoneTypeOptionExpanded = false;
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
        document.title = "Settings - Chatr";
    else if (lang == "ko")
        document.title = "설정 - Chatr";
    else if (lang == "jp")
        document.title = "設定 - Chatr";
    else if (lang == "zh")
        document.title = "設置 - Chatr";
    document.getElementById("lang-options").innerHTML = "";
    document.getElementById("lang-options").innerHTML += "<tr>";
    document.getElementById("lang-options").innerHTML += "</tr>";
    for (i = 0; i < supported_languages_name.length; i++) {
        if (supported_languages_code[i] == lang) {
            document.getElementById("lang-options").innerHTML += "<td id=\"language-select-"+supported_languages_code[i]+"\" class=\"language-select\">"+supported_languages_name[i]+"</td>";
            document.getElementById("language-select"+"-"+supported_languages_code[i]).languagecode = i;
            document.getElementById("language-select"+"-"+supported_languages_code[i]).addEventListener("mouseover", function(){
                textColorTransitionAnimation(this, 0, 51, 81, 70, 121, 151, 0.3);
            });
            document.getElementById("language-select"+"-"+supported_languages_code[i]).addEventListener("mouseout", function(){
                textColorTransitionAnimation(this, 70, 121, 151, 0, 51, 81, 0.3);
            });
            document.getElementById("language-select"+"-"+supported_languages_code[i]).addEventListener("click", function(){
                showAllLanguageOptions();
            });
            document.getElementById("language-select"+"-"+supported_languages_code[i]).addEventListener("mouseover", function(){
                this.innerHTML = supported_languages_eng_name[Number(this.languagecode)];
            });
            document.getElementById("language-select"+"-"+supported_languages_code[i]).addEventListener("mouseout", function(){
                this.innerHTML = supported_languages_name[Number(this.languagecode)];
            });
            break;
        }
    }
    fadeAnimation(document.getElementById("lang-options"), 0.00, 1.00, 1);
    document.getElementById("language-select"+"-"+lang).addEventListener("click", function(){
        showAllLanguageOptions();
    });
    document.getElementById("setting-form-container"+"-"+lang).style.display = "block";
    document.getElementById("setting-form-container"+"-"+lang).style.opacity = "0.00";
    document.getElementById("setting-button"+"-"+lang).style.opacity = "0.00";
    document.getElementById("setting-button"+"-"+lang).style.cursor = "not-allowed";
    fadeAnimation(document.getElementById("main-title"+"-"+lang), 0.00, 1, 1);
    fadeAnimation(document.getElementById("setting-form-container"+"-"+lang), 0.00, 1, 1);
    document.getElementById("setting-button"+"-"+lang).addEventListener("mouseover", function(){
        backgroundColorTransitionAnimation(this, 0, 132, 224, 0, 162, 254, 0.3);
    });
    document.getElementById("setting-button"+"-"+lang).addEventListener("mouseout", function(){
        backgroundColorTransitionAnimation(this, 0, 162, 254, 0, 132, 224, 0.3);
    });
    fadeAnimation(document.getElementById("setting-button"+"-"+lang), 0.00, 0.10, 1);
    fadeAnimation(document.getElementById("copyright-statement-common"), 0.00, 1, 1);
    document.getElementById("terms-and-conditions-common").addEventListener("mouseover", function(){
        textColorTransitionAnimation(this, 0, 120, 215, 40, 160, 255, 0.3);
    });
    document.getElementById("terms-and-conditions-common").addEventListener("mouseout", function(){
        textColorTransitionAnimation(this, 40, 160, 255, 0, 120, 215, 0.3);
    });
    document.getElementById("terms-and-conditions-common").addEventListener("click", function(){
        window.location.href = "eula.html";
    });
    return;
}
function showNotificationBrowserOptions() {
    document.getElementById("notification-browser-options-container"+"-"+lang).opacity = "0.00";
    document.getElementById("notification-browser-options-container"+"-"+lang).innerHTML = document.getElementById("notification-browser-options-container-expanded"+"-"+lang).innerHTML;
    fadeAnimation(document.getElementById("notification-browser-options-container"+"-"+lang), 0.00, 1.00, 1);
    isNotificationBrowserOptionExpanded = true;
    return;
}
function selectNotificationBrowserOptions(choice) {
    if (choice == "enabled") {
        document.getElementById("notification-browser-options-container"+"-"+lang).opacity = "0.00";
        document.getElementById("notification-browser-options-container"+"-"+lang).innerHTML = document.getElementById("notification-browser-options-container-enabled"+"-"+lang).innerHTML;
        fadeAnimation(document.getElementById("notification-browser-options-container"+"-"+lang), 0.00, 1.00, 1);
    }
    else if (choice == "disabled") {
        document.getElementById("notification-browser-options-container"+"-"+lang).opacity = "0.00";
        document.getElementById("notification-browser-options-container"+"-"+lang).innerHTML = document.getElementById("notification-browser-options-container-disabled"+"-"+lang).innerHTML;
        fadeAnimation(document.getElementById("notification-browser-options-container"+"-"+lang), 0.00, 1.00, 1);
    }
    isNotificationBrowserOptionExpanded = false;
    return;
}
function showNotificationRingtoneOptions() {
    document.getElementById("notification-ringtone-options-container"+"-"+lang).opacity = "0.00";
    document.getElementById("notification-ringtone-options-container"+"-"+lang).innerHTML = document.getElementById("notification-ringtone-options-container-expanded"+"-"+lang).innerHTML;3
    fadeAnimation(document.getElementById("notification-ringtone-options-container"+"-"+lang), 0.00, 1.00, 1);
    isNotificationRingtoneOptionExpanded = true;
    return;
}
function selectNotificationRingtoneOptions(choice) {
    if (choice == "enabled") {
        document.getElementById("notification-ringtone-options-container"+"-"+lang).opacity = "0.00";
        document.getElementById("notification-ringtone-options-container"+"-"+lang).innerHTML = document.getElementById("notification-ringtone-options-container-enabled"+"-"+lang).innerHTML;
        fadeAnimation(document.getElementById("notification-ringtone-options-container"+"-"+lang), 0.00, 1.00, 1);
    }
    else if (choice == "disabled") {
        document.getElementById("notification-ringtone-options-container"+"-"+lang).opacity = "0.00";
        document.getElementById("notification-ringtone-options-container"+"-"+lang).innerHTML = document.getElementById("notification-ringtone-options-container-disabled"+"-"+lang).innerHTML;
        fadeAnimation(document.getElementById("notification-ringtone-options-container"+"-"+lang), 0.00, 1.00, 1);
    }
    isNotificationRingtoneOptionExpanded = false;
    return;
}
function showNotificationRingtoneTypeOptions() {
    document.getElementById("notification-ringtone-type-options-container"+"-"+lang).opacity = "0.00";
    document.getElementById("notification-ringtone-type-options-container"+"-"+lang).innerHTML = document.getElementById("notification-ringtone-type-options-container-expanded"+"-"+lang).innerHTML;3
    fadeAnimation(document.getElementById("notification-ringtone-type-options-container"+"-"+lang), 0.00, 1.00, 1);
    isNotificationRingtoneOptionExpanded = true;
    return;
}
function selectNotificationRingtoneTypeOptions(choice) {
    document.getElementById("notification-ringtone-type-options-container"+"-"+lang).opacity = "0.00";
    var instrument_list = new Array("accordion", "accoustic-guitar", "b-flat-clarinet", "classic-guitar", "electric-guitar", "flute", "harmonica", "piano", "original", "violin");
    var i;
    for (i = 0; i < instrument_list.length; i++)
        if (choice == instrument_list[i]) {
            document.getElementById("notification-ringtone-type-options-container"+"-"+lang).innerHTML = "<tr id=\"notification-ringtone-type-option-inner-container"+"-"+lang+"\"></tr>";
            document.getElementById("notification-ringtone-type-option-inner-container"+"-"+lang).innerHTML = document.getElementById("notification-ringtone-type-option"+"-"+instrument_list[i]+"-"+"container"+"-"+lang).innerHTML;
            var current_instrument = instrument_list[i];
            break;
        }

    document.getElementById("notification-ringtone-type-option-inner-container"+"-"+lang).addEventListener("click", function() {
        showNotificationRingtoneTypeOptions();
    });
    document.getElementById("ringtone-type"+"-"+current_instrument+"-"+"test").play();
    fadeAnimation(document.getElementById("notification-ringtone-type-options-container"+"-"+lang), 0.00, 1.00, 1);
    isNotificationRingtoneTypeOptionExpanded = false;
    return;
}
function showAllLanguageOptions() {
    var i;
    document.getElementById("lang-options").opacity = "0.00";
    document.getElementById("lang-options").innerHTML = "";
    document.getElementById("lang-options").innerHTML += "<tr>";
    for (i = 0; i < supported_languages_name.length; i++)
        document.getElementById("lang-options").innerHTML += "<td id=\"language-select-"+supported_languages_code[i]+"\" class=\"language-select\">"+supported_languages_name[i]+"</td>";
    document.getElementById("lang-options").innerHTML += "</tr>";
    for (i = 0; i < document.getElementsByClassName("language-select").length; i++) {
        document.getElementById("language-select"+"-"+supported_languages_code[i]).languagecode = i;
        document.getElementsByClassName("language-select")[i].addEventListener("mouseover", function(){
            textColorTransitionAnimation(this, 0, 51, 81, 70, 121, 151, 0.3);
        });
        document.getElementsByClassName("language-select")[i].addEventListener("mouseout", function(){
            textColorTransitionAnimation(this, 70, 121, 151, 0, 51, 81, 0.3);
        });
        document.getElementsByClassName("language-select")[i].addEventListener("click", function(){
            location.hash = this.id.substring(16, 18);
            location.reload();
        });
        document.getElementsByClassName("language-select")[i].addEventListener("mouseover", function(){
            this.innerHTML = supported_languages_eng_name[Number(this.languagecode)];
        });
        document.getElementsByClassName("language-select")[i].addEventListener("mouseout", function(){
            this.innerHTML = supported_languages_name[Number(this.languagecode)];
        });
    }
    fadeAnimation(document.getElementById("lang-options"), 0.00, 1.00, 1);
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