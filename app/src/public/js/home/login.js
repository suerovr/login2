"use strict";

const id = document.querySelector("#id"),//선택자 id
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

console.log(id);

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value, //id값
        psword: psword.value,
    };

    fetch("/login", {
        method: "POST", //서버에 보내기
        headers: {
            "Content-Type": "application/json"// json받는 다고 명시
        },
        body: JSON.stringify(req) // json stringify로 json으로 만ㄷ름
    })
    .then((res) => res.json()) //콘솔에 다시 반환
    .then((res) => {
        if (res.success) {
            location.href = "/";
        } else{
            alert(res.msg);
        }
    })
    .catch((err)=> {
        console.error(new Error("로그인 중 에러 발생"));
    });
}