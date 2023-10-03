// var mongoClient =  require("mongodb").MongoClient;
// var express = require("express")

// var cors =  require("cors");
// const { request } = require("express");
// const { response } = require("express");
// const { MongoClient } = require("mongodb");

// var app = express() ;

// app.use(cors());
// app.use(express.urlencoded(
//     {extended:true}
// ))
// app.use(express.json())

// app.get("/customer", (req,res) =>{
//     MongoClient
//     .connect("mongodb://127.0.0.1:27017")
//     .then((obj)=>{
//     //  console.log("rrr", obj)
//      var database = obj.db("tutorial");
//      database.collection("customers").find({}).toArray().then(document =>{
//         res.send(document)
//         res.end()
//      })
//     })
//     .catch((err)=>{console.log(err)})
// })

// app.post("/registercustomer",(req,res)=>{
//     // console.log("req body", req.body)
//     var customerDetails = {
//         UserId : req.body.UserId,
//         UserName : req.body.UserName,
//         Password : req.body.Password,
//         Age:parseInt( req.body.Age),
//         Email : req.body.Email
//     }
//     console.log("=======================",customerDetails);
//     MongoClient.connect("mongodb://127.0.0.1:27017")
//     .then((obj)=>{
//      var database = obj.db("tutorial")
//      database.collection("customers").insertOne(customerDetails).then(()=>{
//         console.log("Recorded Inserted")
//         res.redirect("/customer")
//         // res.send(customerDetails)
//      })
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })


// app.listen(5000, ()=>{
// console.log("server is running on : http://127.0.0.1:5000")

// });

var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var app = express();
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
const connectionString = "mongodb://127.0.0.1:27017";
app.get("/customer", (req, res) => {
  mongoClient
    .connect(connectionString)
    .then((obj) => {
      var database = obj.db("tutorial");
      database
        .collection("customers")
        .find({})
        .toArray()
        .then((document) => {
          res.send(document);
          res.end();
        });
    })
    .catch((err) => console.log(err));
});

app.post("/registercustomer", (req, res) => {
  console.log("Req body", req.body);
  var customerDetails = {
    UserId: req.body.UserId,
    UserName: req.body.UserName,
    Password: req.body.Password,
    Age: parseInt(req.body.Age),
    Email: req.body.Email,
    Mobile: req.body.Mobile,
  };
  mongoClient
    .connect(connectionString)
    .then((obj) => {
      var database = obj.db("tutorial");
      database
        .collection("customers")
        .insertOne(customerDetails)
        .then(() => {
          console.log("Record inserted.");
          res.send(customerDetails);
          // res.redirect("/customer");
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(5000, () => {
  console.log("App is listening to http://127.0.0.1:5000");
});