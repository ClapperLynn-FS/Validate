"use strict";
let fs = require("fs");
let http = require("http");
let path = require("path");
let url = require("url");

let express = require("express");
let request = require("request");
let bodyParser= require("body-parser");



let ejs = require("ejs");
const router = express.Router();
let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");
app.engine("ejs",require("ejs").__express);

app.use(express.static("public"));
app.use(express.static("views"));

router.get("/",function(req,res){
    res.render("index",{pagename:"Home"})
})

router.get("/contact",function(req,res){
    res.render("contact",{pagename:"Contact"})
})

router.get("/projects",function(req,res){
    res.render("projects",{pagename:"Projects"})
})
app.get("/login",function(req,res){
    
})
app.post("/register",function(req,res){
    let errors = [];

//name validation
    if(req.body.name==""){
        errors.push("Name is Required!")
    }

//address validation
    if(req.body.address==""){
        errors.push("Address is Required!")
    }

//city validation
    if(req.body.city==""){
        errors.push("City is Required!")
    }

//state validation
    if(req.body.state==""){
        errors.push("State is Required!")
    }

//zipcode validation
    if(req.body.zipcode==""){
        errors.push("ZipCode is Required!")
    }

//age validation
    if(req.body.age==""){
        errors.push("Age is Required!")
    }

//gender validation
    if(req.body.gender==""){
        errors.push("gender is Required!")
    }

//consent box validation
    if(req.body.checked==""){
        errors.push("consent is Required!")
    }
    
    


console.log(errors);
    res.render("index",{pagename:"Home",errors:errors});
})

app.use("/",router)

let server = app.listen("8080");