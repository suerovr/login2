"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
     home: (req, res)=> {
        res.render("home/index");
    },
    
     login: (req, res)=> {
        res.render("home/login");
    },
};

//로그인 프로세스
const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        const users = UserStorage.getUsers("id", "psword");
        
        const response = {}; // 응답일 때
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] == psword) {
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = "로그인에 실패";
        return res.json(response);
        
    },
}


//모듈 내보내기
module.exports = {
    output,
    process
};
