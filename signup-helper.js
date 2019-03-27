    var lang = "en";
    var supported_languages_name = new Array("한국어", "English");
    var supported_languages_eng_name = new Array("Korean", "English");
    var supported_languages_code = new Array("ko", "en");
    initialRoutine();
function initialRoutine() {
    if (location.hash == "")
        lang = "en";
    else
        lang = location.hash.substring(1, 3);
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
    fadeAnimation(document.getElementById("lang-options"), 0.00, 1.00, 1);
    document.getElementById("language-select"+"-"+lang).addEventListener("click", function(){
        showAllLanguageOptions();
    });
    formConfigure();
    return;
}
function formConfigure() {
    document.getElementById("email-field"+"-"+lang).innerHTML = "";
    document.getElementById("email-field"+"-"+lang).innerHTML += "<input type=\"text\" id=\"email-local-part"+lang+"\" \" class=\"small-textbox"+lang+"\" />";
    document.getElementById("email-field"+"-"+lang).innerHTML += "&#64;";
    document.getElementById("email-field"+"-"+lang).innerHTML += "<input type=\"text\" id=\"email-address"+lang+"\" \" class=\"small-textbox"+lang+"\" />";

    for (i = 0; i < document.getElementsByClassName("residency-option"+"-"+lang).length; i++) {
        document.getElementsByClassName("residency-option"+"-"+lang)[i].addEventListener("mouseover", function(){
            if (this.selected != "true")
                backgroundColorTransitionAnimation(this, 255, 255, 255, 221, 242, 255, 0.3);
        });
    }
    for (i = 0; i < document.getElementsByClassName("residency-option"+"-"+lang).length; i++) {
        document.getElementsByClassName("residency-option"+"-"+lang)[i].addEventListener("mouseout", function(){
            if (this.selected != "true")
                backgroundColorTransitionAnimation(this, 221, 242, 255, 255, 255, 255, 0.3);
        });
    }
    var residency_option_code = new Array("day", "dormitory");
    for (i = 0; i < document.getElementsByClassName("residency-option"+"-"+lang).length; i++) {
        document.getElementsByClassName("residency-option"+"-"+lang)[i].addEventListener("click", function(){
            for (i = 0; i < document.getElementsByClassName("residency-option"+"-"+lang).length; i++) {
                document.getElementsByClassName("residency-option"+"-"+lang)[i].style.backgroundColor = "rgb(255, 255, 255)";
                document.getElementsByClassName("residency-option"+"-"+lang)[i].selected = "false";
            }
            if (this.id == "residency-option-dorm-ko") {
                document.getElementById("residence-picker"+"-"+lang).residency = "dormitory";
                showDormitoryPicker();
            }
            else {
                document.getElementById("residence-picker"+"-"+lang).residency = "day";
                hideDormitoryPicker();
            }
            this.selected = "true";
            backgroundColorTransitionAnimation(this, 221, 242, 255, 160, 218, 255, 0.3);
        });
    }
    return;
}
function showDormitoryPicker() {
    document.getElementById("address-field"+"-"+lang).contentEditable = "false";
    document.getElementById("address-field"+"-"+lang).innerHTML = "";
    document.getElementById("address-field"+"-"+lang).innerHTML += "<table id=\"dormitory-select-"+lang+"\"><tr>";
    document.getElementById("address-field"+"-"+lang).innerHTML += "<td id=\"house-select-container\"><table id=\"house-select\"></table></td>";
    document.getElementById("address-field"+"-"+lang).innerHTML += "<td id=\"room-select-container\"><input type=\"text\" id=\"room-select\" /></td>";
    document.getElementById("address-field"+"-"+lang).innerHTML += "</tr></table>";
    return;
}
function hideDormitoryPicker() {
    document.getElementById("address-field"+"-"+lang).contentEditable = "true";
    document.getElementById("address-field"+"-"+lang).innerHTML = "";
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