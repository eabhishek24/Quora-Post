const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");  // require the package 


app.use(express.urlencoded({extended: true})); 
app.use(methodOverride('_method'));               // use the package 

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname , "public")));

let posts = [
    { 
    id: uuidv4(),
    username : "apnacollege",
    content : "i love coding",
    },
    {   
        id: uuidv4(),
        username : "abhishek",
        content : "Hard work is important to achieve success",
    },
    {   
        id: uuidv4(),
        username : "rahul kumar",
        content : "I got selected in my 1st internship",
    },
];      

app.get("/posts",(req,res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new" , (req , res) => {
    res.render("new.ejs");
});

app.post("/posts" , (req , res) => {
    //console.log(req.body);
    let {username , content} = req.body;
    let id = uuidv4();
    posts.push({id, username,content});
    //res.send("post request working"); 
    res.redirect("/posts");
});

app.get("/posts/:id" , (req,res) => {
  let {id} = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req , res ) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(id);
    //res.send("patch request working");
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);   
    res.render("edit.ejs", { post });
});


app.listen(port , () => {
    console.log("listening to port : 8080");
});
