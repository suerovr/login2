"use strict";

const express = require("express");
const router = express.Router();

//컨트롤러
const ctrl = require("./home.ctrl");

//html 띄울래 get (위치, 뭘 실행 res req 컨트롤러 함수 사용)
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

//외부 파일 사용모듈 출력
module.exports = router;