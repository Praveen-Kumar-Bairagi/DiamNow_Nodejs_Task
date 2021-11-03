const express = require("express");
const post1 = require("../module/post");

const active = async (req, res) => {
  try {
    const data = await post1.aggregate([{ $match: { ActiveInactive: true } }]);
    res.send(data);
  } catch (err) {
    res.send("no ac.active..");
  }
};

const Inactive = async (req, res) => {
  try {
    const data = await post1.aggregate([{ $match: { ActiveInactive: false } }]);
    res.send(data);
  } catch (err) {
    res.send("no ac.inactive.");
  }
};

module.exports = { active, Inactive };
