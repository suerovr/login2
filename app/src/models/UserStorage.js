"use strict";

class UserStorage{
    static #users = {//클래스 안에 변수는 const 필요 없음. static해야 정적변수로 바로접근가능 "#"을쓰면 안보임 암호화
        id: ["dh"],
        psword: ["123"],
        name: ["dhdh"]
    };

    static getUsers(...fields){//다시 받아오기
        const users =  this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});//{}오브젝트는 newUsers
        return newUsers;
    }
}


module.exports = UserStorage;