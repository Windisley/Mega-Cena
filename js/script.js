"use strict";
const $inputs = document.querySelectorAll("[data-number]");
const $button = document.querySelector("[data-button]");
const $inputgame = document.querySelector("[data-game]");
$button?.addEventListener("click", () => {
    let Start = false;
    let Empty = false;
    $inputs.forEach((input) => {
        if ($inputgame.value != "") {
            const randonnumber = Math.random() * 50;
            const parcedstring = randonnumber.toFixed(2);
            input.value = parcedstring;
            if (input.value === $inputgame.value) {
                Start = true;
            }
        }
        else {
            Empty = true;
        }
    });
    if (Empty) {
        alert("Informe os Numeros para Jogar");
    }
    if (Start) {
        alert("Parabens Você Agora E Um Milionario!!!");
    }
    else {
        alert("Não Foi Dessa Vez Que Você Ficou Milionário!");
    }
});
