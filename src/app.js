const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,"../templates/views"));
hbs.registerPartials(path.join(__dirname,"../templates/partials"));
app.use(express.static(path.join(__dirname,"../public")));

const port = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.render('index');
})
app.get("/pg",(req,res)=>{
    res.render("pg");
})
app.get("/apartment",(req,res)=>{
    res.render("apartment");
})
app.get("/jobs",(req,res)=>{
    res.render("jobs")
})
app.get("*", (req,res)=>{
    res.render("error",{
        errorMsg: "Page Not Found"
    });
})
app.listen(port,()=>{
    console.log("Running")
})
