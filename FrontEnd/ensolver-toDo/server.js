const express=require("express");
const path=require("path");

const app=express();

app.use(express.static('./dist/ensolver-toDo'));

app.get('/*',function(req,res){
    res.sendFile('index.html',{root:'/app/dist/ensolver-toDo/'});
});

app.listen(process.env.PORT || 8080);