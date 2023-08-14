"use strict";

// 모듈
const express = require("express"); // express로 서버 열기 변수 설정
const bodyParser = require("body-parser") // body 가져오기 
const app = express();              // app을 express실행으로 변수설정


//포트번호

//라우팅
const home = require("./src/routes/home");

// 앱세팅 set은 세팅을 담당 views들은 views에 있다. 설정 값을 viewengine은 ejs
app.set("views", "./src/views");
app.set("view engine", "ejs");

//ㅁ디ㅡㄹ웨어 함수 저기로
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

// /에 오는 모든 함수들을 미들웨어 함수 home을 실행
app.use("/", home);

module.exports = app;