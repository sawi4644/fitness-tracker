const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const mongojs = require("mongojs");


//express app
const app = express();

//Connect to MongoDB
const dbURI = "mongodb+srv://sawi4644:hahahaha@cluster0.4hzbm.mongodb.net/big-gains?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology:true})
.then((result) => app.listen(3000, () => {
    console.log("App running on port 3000!");
  }))
.catch((err)=> console.log(err));

//register view engine
app.set('view engine','ejs');

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "";
const collections = ["notes"];

// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

// app.get("/", (req, res) => {
//   res.send(index.html);
// });


// 1. Save a note to the database's collection
// POST: /submit
// ===========================================
// app.post('/submit', (req,res)=>{
//   console.log(req.body)
//   db.notes.insert(req.body, (err,result)=>{
//     if (err) throw err
//     res.json(result)
//   })
// })


// app.get('/all', (req,res)=>{
//   db.notes.find({}, (err, result)=>{
//     if (err) throw err 
//     res.json(result)
//   })
// })