"use strict";

const id = document.querySelector("#id"),//선택자 id
    name = document.querySelector('#name'),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),

    registerBtn = document.querySelector("#button");

console.log(id);

registerBtn.addEventListener("click", register);

function register() {
    if(!id.value) return alert ("아이디를 입력해주세요")

    if (psword !== confirmPsword) {
        return alert("비밀번호가 일치하지 않습니다.")
    }
    const req = {
        id: id.value, //id값
        name: name.value,
        psword: psword.value,
    };

     fetch("/register", {
         method: "POST", //서버에 보내기
         headers: {
             "Content-Type": "application/json"// json받는 다고 명시
         },
         body: JSON.stringify(req) // json stringify로 json으로 만ㄷ름
     })
     .then((res) => res.json()) //콘솔에 다시 반환
     .then((res) => {
         if (res.success) {
             location.href = "/login";
         } else{
             alert(res.msg);
         }
     })
     .catch((err)=> {
         console.error("회원가입 중 에러발생");
     });
}