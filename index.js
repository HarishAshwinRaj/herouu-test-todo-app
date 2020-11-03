const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./router/todos");
const path = require("path");



const app = express();
const port = process.env.PORT||3000;


mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost:27017/todos_db",{useNewUrlParser: true,useUnifiedTopology:true})
app.use("/", bodyparser.json());
app.use("/api", route);

app.use('/', express.static(path.join(__dirname, "public")));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
