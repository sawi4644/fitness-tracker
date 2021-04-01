const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const Workout= require("./models/newWork");


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

// const databaseUrl = "";
// const collections = ["notes"];

// const db = mongojs(databaseUrl, collections);

Workout.init();

// app.on("error", error => {
//   console.log("Database Error:", error);
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.get("/", (req, res) => {
  res.send(index.html);
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
})
//     const newWorkout = new Workout(
//       { 
//       day: Date,
//       exercises:[],
//   });
//     workout.save()
//     .then((result) =>{
//       res.send(result)
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//   });


// routes
app.get("/api/exercise", (req, res) => {
  Workout.find()
  .then((result) =>{
    res.send(result);
  })
  .catch((err)=>{
    console.log(err)
  })
})