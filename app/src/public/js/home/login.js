"use strict";

const id = document.querySelector("#id"),//선택자 id
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

console.log(id);

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,


    };
    console.log(req);
};