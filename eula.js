// eula.js
    var lang = "en";
    var supported_languages_name = new Array("한국어", "English", "日本語");
    var supported_languages_eng_name = new Array("Korean", "English", "Japanese");
    var supported_languages_code = new Array("ko", "en", "jp");
    initialRoutine();
function initialRoutine() {
    if (location.hash == "")
        lang = "en";
    else
        lang = location.hash.substring(1, 3);
    if (lang == "en")
        document.title = "EULA - Chatr";
    else if (lang == "ko")
        document.title = "이용 약관 - Chatr";
    else if (lang == "jp")
        document.title = "利用規約 - Chatr";
    if (document.referrer != "" && document.referrer.search("eula.html") == -1) {
        document.getElementById("navigation-button").style.backgroundColor = "rgb(0, 120, 215)";
        document.getElementById("navigation-button").innerHTML = "<img src=\"ui/previous-button.svg\" id=\"navigation-button-prev\" />";
        document.getElementById("navigation-button").addEventListener("click", function(){
            history.back();
        });
    }
    else {
        document.getElementById("navigation-button").style.backgroundColor = "rgb(255, 100, 100)";
        document.getElementById("navigation-button").innerHTML = "<img src=\"ui/close-button.svg\" id=\"navigation-button-close\" />";
        document.getElementById("navigation-button").addEventListener("click", function(){
            window.close();
        });
    }
    document.getElementById("lang-options").opacity = "0.00";
    document.getElementById("lang-options").innerHTML = "";
    document.getElementById("lang-options").innerHTML += "<tr>";
    document.getElementById("lang-options").innerHTML += "</tr>";
    for (i = 0; i < supported_languages_name.length; i++) {
        if (supported_languages_code[i] == lang) {
            document.getElementById("lang-options").innerHTML += "<td id=\"language-select-"+supported_languages_code[i]+"\" class=\"language-select\">"+supported_languages_name[i]+"</td>";
            document.getElementById("language-select"+"-"+supported_languages_code[i]).languagecode = i;
            document.getElementById("language-select"+"-"+supported_languages_code[i]).addEventListener("mouseover", function(){
                textColorTransitionAnimation(document.getElementById("language-select"+"-"+supported_languages_code[i]), 0, 51, 81, 70, 121, 151, 0.3);
            });
            document.getElementById("language-select"+"-"+supported_languages_code[i]).addEventListener("mouseout", function(){
                textColorTransitionAnimation(document.getElementById("language-select"+"-"+supported_languages_code[i]), 70, 121, 151, 0, 51, 81, 0.3);
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
    for (i = 0; i < supported_languages_name.length; i++)
        if (supported_languages_code[i] != lang)
            document.getElementById("license-container"+"-"+supported_languages_code[i]).style.display = "none";
    fadeAnimation(document.getElementById("navigation-button"), 0.00, 1, 1);
    fadeAnimation(document.getElementById("lang-options"), 0.00, 1.00, 1);
    fadeAnimation(document.getElementById("license-container"+"-"+lang), 0.00, 1.00, 1);
    fadeAnimation(document.getElementById("copyright-statement-common"), 0.00, 1, 1);
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