// cerovix-introduction.js
    initialRoutine();
function initialRoutine() {
    fadeAnimation(document.getElementById("main-title"), 0.00, 1.00, 1);
    fadeAnimation(document.getElementById("establishment-date-mention"), 0.00, 1.00, 1);
    fadeAnimation(document.getElementById("company-logo"), 0.00, 1.00, 1);
    fadeAnimation(document.getElementById("copyright-statement-common"), 0.00, 1.00, 1);
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