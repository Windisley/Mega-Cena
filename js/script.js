"use strict";
const $inputs = document.querySelectorAll("[data-number]");
const $button = document.querySelector("[data-button]");
$button?.addEventListener("click", () => {
    $inputs.forEach((input) => {
        if (input) {
            input.value = "10";
        }
    });
    console.log("oi");
});
