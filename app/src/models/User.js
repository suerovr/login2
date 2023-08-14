"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) { //생성자로 body받기
        this.body = body; 
    }

    login(){
        const body = this.body;
        const { id, psword } = UserStorage.getUserInfo(body.id);
  
        if (id) {
            if ( id === body.id && psword === body.psword){
                return { success: true };
            }     
            return { success: false, msg: "비번 틀"};
        }
        return { success: false, msg: "존재않 아이디"};
    }
}

module.exports = User;
