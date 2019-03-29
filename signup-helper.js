    var lang = "en";
    var supported_languages_name = new Array("한국어", "English", "日本語", "中文");
    var supported_languages_eng_name = new Array("Korean", "English", "Japanese", "Chinese");
    var supported_languages_code = new Array("ko", "en", "jp", "zh");
    var register_button_active = false;
    var license_agreement = false;
    initialRoutine();
function initialRoutine() {
    if (parseCookie("lang") != "")
        lang = parseCookie("lang");
    else {
        if (location.hash == "")
            lang = "en";
        else
            lang = location.hash.substring(1, 3);
        if (lang == "en")
            document.title = "Sign up - Chatr";
        if (lang == "ko")
            document.title = "가입 - Chatr";
        if (lang == "jp")
            document.title = "会員登録 - Chatr";
        if (lang == "zh")
            document.title = "報名 - Chatr";
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
    document.getElementById("signup-form"+"-"+lang).style.display = "block";
    fadeAnimation(document.getElementById("lang-options"), 0.00, 1.00, 1);
    document.getElementById("language-select"+"-"+lang).addEventListener("click", function(){
        showAllLanguageOptions();
    });
    document.getElementById("eula-link"+"-"+lang).addEventListener("mouseover", function(){
        textColorTransitionAnimation(this, 0, 120, 215, 40, 160, 255, 0.3);
    });
    document.getElementById("eula-link"+"-"+lang).addEventListener("mouseout", function(){
        textColorTransitionAnimation(this, 40, 160, 255, 0, 120, 215, 0.3);
    });
    fadeAnimation(document.getElementById("signup-form"+"-"+lang), 0.00, 1, 1);
    document.getElementById("signin-link"+"-"+lang).addEventListener("mouseover", function(){
        textColorTransitionAnimation(this, 0, 120, 215, 40, 160, 255, 0.3);
    });
    document.getElementById("signin-link"+"-"+lang).addEventListener("mouseout", function(){
        textColorTransitionAnimation(this, 40, 160, 255, 0, 120, 215, 0.3);
    });
    document.getElementById("recover-account"+"-"+lang).addEventListener("mouseover", function(){
        textColorTransitionAnimation(this, 0, 120, 215, 40, 160, 255, 0.3);
    });
    document.getElementById("recover-account"+"-"+lang).addEventListener("mouseout", function(){
        textColorTransitionAnimation(this, 40, 160, 255, 0, 120, 215, 0.3);
    });
    document.getElementById("register-button"+"-"+lang).addEventListener("click", function(){
        document.register_form_+lang.submit();
    });
    document.getElementById("register-button"+"-"+lang).style.opacity = "0.00";
    document.getElementById("register-button"+"-"+lang).style.cursor = "not-allowed";
    document.getElementById("register-button"+"-"+lang).addEventListener("mouseover", function(){
        backgroundColorTransitionAnimation(this, 0, 132, 224, 0, 162, 254, 0.3);
    });
    document.getElementById("register-button"+"-"+lang).addEventListener("mouseout", function(){
        backgroundColorTransitionAnimation(this, 0, 162, 254, 0, 132, 224, 0.3);
    });
    fadeAnimation(document.getElementById("register-button"+"-"+lang), 0.00, 0.10, 1);
    formConfigure();
    fadeAnimation(document.getElementById("copyright-statement-common"), 0.00, 1.00, 1);
    //colorPickerAreaConfigure();
    return;
}
function formVerify() {
    var validity = true;
    if (lang == "ko") {
        document.getElementById("koreanname"+"-"+lang).value = document.getElementById("korean-name-field-ko").innerHTML;
        if (document.getElementById("koreanname"+"-"+lang).value.length <= 0) {
            validity = false;
            console.log("Korean Name : Insufficient length of characters");
        }
    }
    document.getElementById("englishname"+"-"+lang).value = document.getElementById("english-name-field"+"-"+lang).innerHTML;
    if (document.getElementById("englishname"+"-"+lang).value.length <= 0) {
        validity = false;
        console.log("English Name : Insufficient length of characters");
    }
    document.getElementById("nickname"+"-"+lang).value = document.getElementById("nickname-field"+"-"+lang).innerHTML;
    if (document.getElementById("nickname"+"-"+lang).value.length < 3) {
        validity = false;
        console.log("Nickname : Insufficient length of characters");
    }
    document.getElementById("emaillocalpart"+"-"+lang).value = document.getElementById("email-local-part-text"+"-"+lang).value;
    if (document.getElementById("email-local-part-text"+"-"+lang).value.length <= 0) {
        validity = false;
        console.log("Email Local Part : Insufficient length of characters");
    }
    document.getElementById("emaildomain"+"-"+lang).value = document.getElementById("email-domain-text"+"-"+lang).value;
    if (document.getElementById("email-domain-text"+"-"+lang).value.length < 4) {
        validity = false;
        console.log("Email Domain : Insufficient length of characters");
    }
    if (document.getElementById("password-textbox1"+"-"+lang).value != document.getElementById("password-textbox2"+"-"+lang).value) {
        validity = false;
        console.log("Password : Not matching");
    }
    document.getElementById("password"+"-"+lang).value = document.getElementById("password-textbox1"+"-"+lang).value;
    if (document.getElementById("password"+"-"+lang).value.length < 8) {
        validity = false;
        console.log("Password : Insufficient length of characters");
    }
    if (!license_agreement)
        validity = false;
    
    if (validity) {
        if (!register_button_active) {
            fadeAnimation(document.getElementById("register-button"+"-"+lang), 0.10, 1.00, 1);
            document.getElementById("register-button"+"-"+lang).style.cursor = "pointer";
            document.getElementById("register-button"+"-"+lang).disabled = false;
            register_button_active = true;
        }
    }
    else {
        if (register_button_active) {
            document.getElementById("register-button"+"-"+lang).disabled = true;
            document.getElementById("register-button"+"-"+lang).style.cursor = "not-allowed";
            fadeAnimation(document.getElementById("register-button"+"-"+lang), 1.00, 0.10, 1);
            register_button_active = false;
        }
    }
}
function formConfigure() {
    if (lang == "ko")
        document.getElementById("korean-name-field"+"-"+lang).addEventListener("keyup", formVerify);
    document.getElementById("english-name-field"+"-"+lang).addEventListener("keyup", formVerify);
    document.getElementById("nickname-field"+"-"+lang).addEventListener("keyup", formVerify);
    document.getElementById("email-local-part"+"-"+lang).addEventListener("keyup", formVerify);
    document.getElementById("email-domain"+"-"+lang).addEventListener("keyup", formVerify);
    document.getElementById("password-textbox1"+"-"+lang).addEventListener("keyup", formVerify);
    document.getElementById("password-textbox2"+"-"+lang).addEventListener("keyup", formVerify);

    document.getElementById("license-agreement"+"-"+lang).addEventListener("click", function(){
        if (this.checked == true)
            license_agreement = true;
        else
            license_agreement = false;
        formVerify();
    });
    /*
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
    */
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
            setCookie(lang, this.id.substring(16, 18), 7);
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
function setCookie(cookie_name, cookie_value, expiration_days) {
    var expiration_date = new Date();
    expiration_date.setTime(expiration_date.getTime() + (expiration_days*24*60*60*1000));
    var expiration_string = "expires="+ expiration_date.toUTCString();
    document.cookie = cookie_name + "=" + cookie_value + ";" + expiration_date + ";path=/";
}
function parseCookie(value_label) {
    var name_string = value_label + "=";
    var decoded_cookie = decodeURIComponent(document.cookie);
    var cookie_segment = decoded_cookie.split(';');
    var i;
    for (i = 0; i < cookie_segment.length; i++) {
        var temp_cookie_segment = cookie_segment[i];
        while (temp_cookie_segment.charAt(0) == ' ')
            temp_cookie_segment = temp_cookie_segment.substring(1);
        if (temp_cookie_segment.indexOf(name) == 0)
            return temp_cookie_segment.substring(name_string.length, temp_cookie_segment.length);
    }
    return "";
}