"use strict";

function random(min, max) {return Math.floor(Math.random() * (max - min + 1) + min);}
let aleatorio = random(100, 999);

let mensaje_captcha = document.querySelector("#mensaje_captcha");
mensaje_captcha.innerHTML ="Ingrese el siguiente " + aleatorio + " numero para verificar";

let visible = document.querySelector("#btn_aceptar");
visible.addEventListener("click", mostrar);

function mostrar() {
  let numero_captcha = parseInt(document.querySelector("#form_input").value);
  if (numero_captcha === aleatorio) {
    let entrada = document.querySelector("#mensaje_captcha");
    entrada.innerHTML = "Usted ingreso el captcha correctamente";
    document.querySelector("#btn_captcha").style.visibility = "visible";
    document.querySelector("#btn_aceptar").style.visibility = "hidden";
  } else {
    let entrada = document.querySelector("#mensaje_captcha");
    entrada.innerHTML = "Debes intentar nuevamente";
    setTimeout("location.reload()", 2000);
  }
}
