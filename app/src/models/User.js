"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) { //생성자로 body받기
        this.body = body; 
    }

    login(){
        const client = this.body;
        const { id, psword } = UserStorage.getUserInfo(client.id);
  
        if (id) {
            if ( id === client.id && psword === client.psword){
                return { success: true };
            }     
            return { success: false, msg: "비번 틀"};
        }
        return { success: false, msg: "존재않 아이디"};
    }
    
    register( ){
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;
