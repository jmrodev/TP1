"use strict";
btn_captcha.addEventListener("click", ingresoCaptcha);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let aleatorio = random(100, 999);

let mensaje_captcha = document.querySelector("#mensaje_captcha");
mensaje_captcha.innerHTML = "ingrese el numero siguiente " + aleatorio;

function ingresoCaptcha(e) {
    e.preventDefault();
    let entrada = document.querySelector("#form_input");
    let data_captcha = entrada.value;
    let numero_captcha = parseInt(data_captcha);
    let resultado_captcha = numero_captcha === aleatorio;

    if (resultado_captcha) {
        captchaCorrecto();
    } else {
        captchaIncorrecto();
    }
}

function captchaCorrecto() {
    let entrada = document.querySelector("#mensaje_captcha")
    entrada.innerHTML ="Usted ingreso el captcha correctamente";
}
function captchaIncorrecto() {
    let entrada = document.querySelector("#mensaje_captcha")
    entrada.innerHTML = "Debes intentar nuevamente";
}
