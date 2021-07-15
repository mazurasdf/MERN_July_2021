const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/api", (req, res) => {
    console.log("hello from the express route!");
    res.json({message:"hey I'm jsoning here!!"});
})

app.get("/repeat/:word", (req, res) => {
    console.log("hello from the express route!");
    res.json({message:req.params.word});
})

app.post("/api/repeat/", (req,res)=>{
    res.json(req.body);
})

app.post("/api/square", (req,res) => {
    const square = req.body.number ** 2;
    res.json({square: square});
})


app.listen(port, () => console.log(`running on port ${port} is a new way I like to be!!!!!!`));