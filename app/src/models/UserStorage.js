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

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        // const users =  this.#users;
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {//내려가며 뭔지 확인
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});//{}오브젝트는 newUsers
        return newUsers;
    }

    static getUsers(isAll, ...fields) {
        return fs
    
        .readFile("./src/databases/users.json")
        .then((data) => {//성공시
            return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error);//에러시
    }



    static getUserInfo(id) {
        return fs
    
        .readFile("./src/databases/users.json")
        .then((data) => {//성공시
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);//에러시
    }


    static async save(userInfo) {
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디입니다";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true };
    }
}

module.exports = UserStorage;