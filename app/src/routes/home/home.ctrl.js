"use strict";

const User = require("../../models/User");

const output = {
     home: (req, res)=> {
        res.render("home/index");
    },
    
     login: (req, res)=> {
        res.render("home/login");
    },
    register: (req, res) =>{
        res.render("home/register");
    }
};

//로그인 프로세스
const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },

    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};


//모듈 내보내기
module.exports = {
    output,
    process
};
