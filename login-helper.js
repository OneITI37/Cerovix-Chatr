// login-helper.js

    var isIdentifierActive = false, isPasswordActive = false, isLoginButtonActive = false;
    initialSequences();

function initialSequences() {
    document.getElementById("identifier-section").style.opacity = "0.00";
    document.getElementById("password-section").style.opacity = "0.00";
    document.getElementById("login-button").style.opacity = "0.00";
    document.getElementById("login-button").style.cursor = "not-allowed";
    fadeAnimation(document.getElementById("identifier-section"), 0.00, 1, 1);
    document.getElementById("identifier").readOnly = false;
    isIdentifierActive = true;
    fadeAnimation(document.getElementById("password-section"), 0.00, 0.10, 1);
    fadeAnimation(document.getElementById("login-button"), 0.00, 0.10, 1);
    document.getElementById("identifier").addEventListener("keyup", function(){
        if (document.getElementById("identifier").value.length >= 6) {
            if (!isPasswordActive) {
                fadeAnimation(document.getElementById("password-section"), 0.10, 1.00, 1);
                document.getElementById("password").readOnly = false;
                document.getElementById("password").style.cursor = "text";
                isPasswordActive = true;
                document.getElementById("password").addEventListener("keyup", function(){
                    if (document.getElementById("password").value.length >= 8) {
                        if (!isLoginButtonActive && document.getElementById("identifier").value.length >= 6) {
                            document.getElementById("login-button").addEventListener("click", function(){
                                document.login_form.submit();
                            })
                            fadeAnimation(document.getElementById("login-button"), 0.10, 1.00, 1);
                            document.getElementById("login-button").disabled = false;
                            document.getElementById("login-button").style.cursor = "pointer";
                            isLoginButtonActive = true;
                        }
                    }
                    else {
                        if (isLoginButtonActive) {
                            document.getElementById("login-button").disabled = true;
                            document.getElementById("login-button").addEventListener("click", function(){
                                return;
                            });
                            document.getElementById("login-button").style.cursor = "not-allowed";
                            isLoginButtonActive = false;
                            fadeAnimation(document.getElementById("login-button"), 1.00, 0.10, 1);
                        }
                    }
                });
            }
            else {
                if (document.getElementById("identifier").value.length >= 6 && document.getElementById("password").value.length >= 8) {
                    if (!isLoginButtonActive) {
                        document.getElementById("login-button").addEventListener("click", function(){
                            document.login_form.submit();
                        })
                        fadeAnimation(document.getElementById("login-button"), 0.10, 1.00, 1);
                        document.getElementById("login-button").disabled = false;
                        isLoginButtonActive = true;
                        document.getElementById("login-button").style.cursor = "pointer";
                    }
                }
            }
        }
        else {
            if (isLoginButtonActive) {
                document.getElementById("login-button").disabled = true;
                isLoginButtonActive = false;
                document.getElementById("login-button").addEventListener("click", function(){
                    return;
                });
                fadeAnimation(document.getElementById("login-button"), 1.00, 0.10, 1);
                document.getElementById("login-button").style.cursor = "not-allowed";
            }
        }
    });
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