const express = require("express");
const router = express.Router();
const post1 = require("../module/post");
const { generatToken, accessToken } = require("../Auth/jwt");

const datapost =
  (accessToken,
  async (req, res) => {
    if (req.body.Title == undefined) {
      return res.send({ error: "Title can't be null" });
    }
    if (req.body.Body == undefined) {
      return res.send({ error: "Body can't be null" });
    }
    if (req.body.CreatedBy == undefined) {
      return res.send({ error: "CreatedBy  can't be null" });
    }
    if (req.body.ActiveInactive == undefined) {
      return res.send({ error: "ActiveInactive can't be null " });
    } else if ((req.body.ActiveInactive != true) & false) {
      return res.send({ error: "ActiveInactive its take only boolean value" });
    }
    if (req.body.Geolocation == undefined) {
      return res.send({ error: "Geolocation can't be null" });
    }
    const data1 = new post1({
      Title: req.body.Title,
      Body: req.body.Body,
      CreatedBy: req.body.CreatedBy,
      ActiveInactive: req.body.ActiveInactive,
      Geolocation: req.body.Geolocation,
    });
    try {
      const data = await data1.save();
      res.send("Your data has inserted");
    } catch (err) {
      res.send("Error" + err);
    }
  });

const dataget =
  (accessToken,
  async (req, res) => {
    try {
      const data = await post1.findById(req.params.id);
      res.send(data);
    } catch (err) {
      res.send("Your id is not exist..");
    }
  });

const putdata =
  (accessToken,
  async (req, res) => {
    try {
      const data = await post1.findById(req.params.id);
      (data.author = req.body.author),
        (data.title = req.body.title),
        (data.description = req.body.description);
      const data1 = await data.save();
      console.log(data1);
      res.send("your data have updated successfully. ");
    } catch (err) {
      res.send("Error" + err);
    }
  });

const deletedata =
  (accessToken,
  async (req, res) => {
    try {
      const data = await post1.findById(req.params.id);
      const data1 = await data.remove();
      res.send("Your Id have deleted successfully..");
    } catch (err) {
      res.send("Error" + err);
    }
  });

module.exports = { datapost, dataget, putdata, deletedata };
