"use strict";

// 모듈
const express = require("express"); // express로 서버 열기 변수 설정
const app = express();              // app을 express실행으로 변수설정


//포트번호



//라우팅
const home = require("./routes/home");

// 앱세팅 set은 세팅을 담당 views들은 views에 있다. 설정 값을 viewengine은 ejs
app.set("views", "./views");
app.set("view engine", "ejs");

// /에 오는 모든 함수들을 미들웨어 함수 home을 실행
app.use("/", home);

module.exports = app;