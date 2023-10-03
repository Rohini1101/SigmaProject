var cors = require("cors")
var express = require("express");
const { data } = require("jquery");

var mongoClient = require("mongodb").MongoClient;

var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

var mongoURL = "mongodb://127.0.0.1:27017";

app.get("/videos", (req, res) => {
    mongoClient.connect(mongoURL).then((clientObj) => {
        // res.send("connection sucessfully")
        var database = clientObj.db("tutorial")
        database.collection("videolibrary").find({}).toArray().then((doc) => { res.send(doc) })

    });
});

app.get("/videos/:id", (req, res) => {
    var video_id = parseInt(req.params.id);
    mongoClient.connect(mongoURL).then((clientObj) => {
        var database = clientObj.db("tutorial");
        database
        .collection("videolibrary")
        .find({ id: video_id })
        .toArray()
        .then((doc) => {
            res.send(doc)
        })
    })
})

app.post("/addvideo", (req, res)=>{
    var video  ={
        id : parseInt(req.body.id),
        title : req.body.title,
        url : req.body.url,
        views :parseInt(req.body.views),
        likes:parseInt(req.body.likes),
        subscribed : req.body.subscribed,
    };
    mongoClient.connect(mongoURL).then((clientObj) =>{
        var database = clientObj.db("tutorial");
        database.collection("videolibrary")
        .insertOne(video)
        .then((doc) =>{
            res.send(video)
        });
    });
});

app.put("/updatevideo/:id", (req, res) =>{
    var video_id = parseInt(req.params.id);
    var video ={
        id: video_id,
        title :req.body.title,
        url : req.body.url,
        views :parseInt(req.body.views),
        likes : parseInt(req.body.views),
        subscribed : req.body.subscribed,
    }
    mongoClient.connect(mongoURL).then((clientObj)=>{
        var database = clientObj.db("tutorial")
        database.collection("videolibrary").updateOne({id:video_id},{$set : video}).then((doc)=>{
            res.send(video)
        })
    })
})

app.delete("/deletevideo/:id", (req,res)=>{
    var video_id = parseInt(req.params.id);
    mongoClient.connect(mongoURL).then((clientObj)=>{
        var database = clientObj.db("tutorial")
        database.collection("videolibrary")
        .deleteOne({id:video_id}).then((doc)=>{
            // console.log("sucessfully deleted")
            res.send("sucessfulli deleted")
        })
    })
})
























app.listen("5050", () => {
    console.log("app is listining on port 5050");
})