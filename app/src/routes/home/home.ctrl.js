"use strict";

const output = {
     home: (req, res)=> {
        res.render("home/index");
    },
    
     login: (req, res)=> {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        console.log(req.body);
    },
}


//모듈 내보내기
module.exports = {
    output,
    process
};
