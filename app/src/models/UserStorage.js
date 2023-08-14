"use strict";

class UserStorage{
    static #users = {//클래스 안에 변수는 const 필요 없음. static해야 정적변수로 바로접근가능 "#"을쓰면 안보임 암호화
        id: ["dh","dk"],
        psword: ["123","dff"],
        name: ["dhdh","dfdf"]
    };

    static getUsers(...fields){//다시 받아오기
        const users =  this.#users;
        const newUsers = fields.reduce((newUsers, field) => {//내려가며 뭔지 확인
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});//{}오브젝트는 newUsers
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUsers, info)=> {
            newUsers[info] = users[info][idx];
            return newUsers;
    }, {});

    return userInfo;
    }
}


module.exports = UserStorage;