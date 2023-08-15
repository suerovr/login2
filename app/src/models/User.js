"use strict";
const {response} = require("express")
const UserStorage = require("./UserStorage");

class User {
    constructor(body) { //생성자로 body받기
        this.body = body; 
    }

    async login(){
        const client = this.body;
        const { id, psword} = await UserStorage.getUserInfo(client.id);
  
        if (id) {
            if ( id === client.id && psword === client.psword){
                return { success: true };
            }     
            return { success: false, msg: "비번 틀"};
        }
        return { success: false, msg: "존재않 아이디"};
    }
    
    async register( ){
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        }   catch (err) {
            return {success: false, msg: err};
        }
    }
}

module.exports = User;
