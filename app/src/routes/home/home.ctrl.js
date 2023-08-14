"use strict";

const User = require("../../models/User");

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
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};


//모듈 내보내기
module.exports = {
    output,
    process
};
