const express = require("express");
const mongooose = require("mongoose");
const mongoose = require("mongoose");
const database = "mongodb://localhost/User_details";
const app = express();
app.use(express.json());

mongoose.connect(database, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected successfully...");
});

app.use("/", require("./routers/task_2"));
app.use("/", require("./routers/task_3"));
app.use("/", require("./routers/task_4"));
app.use("/", require("./routers/task_5"));

const port = 2025;
app.listen(port, () => {
  console.log(`We have connected with this port no. ${port}`);
});
