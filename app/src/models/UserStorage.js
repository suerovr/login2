"use strict";

const fs = require("fs").promises; //filesystem

class UserStorage{

    static #getUserInfo(data, id) { //은닉변수는 맨 앞으로
        const users = (JSON.parse(data)); // 파일 16진수에서 자연어로
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // =>[id, psword, name]
        const userInfo = usersKeys.reduce((newUsers, info)=> {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});

       return userInfo;
    }


    static getUsers(...fields){//다시 받아오기
        // const users =  this.#users;
        const newUsers = fields.reduce((newUsers, field) => {//내려가며 뭔지 확인
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});//{}오브젝트는 newUsers
        return newUsers;
    }

    static getUserInfo(id) {
        return fs
    
        .readFile("./src/databases/users.json")
        .then((data) => {//성공시
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);//에러시
    }


    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true}
    }
}


module.exports = UserStorage;