const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const Note=require("./models/Notes");
mongoose.connect("mongodb+srv://kartik1211:kartik1211@cluster0.s4xfcqu.mongodb.net/notesdb").then(function(){
    app.get("/",function(req,res){
        const response={message:"Api Works"};
        res.json(response);
    });
    const noteRouter=require('./routes/routes');
    app.use("/notes",noteRouter);
});
const PORT=process.env.PORT||5000;
app.listen(PORT,function(){
    console.log("Server started at PORT: "+PORT);
});