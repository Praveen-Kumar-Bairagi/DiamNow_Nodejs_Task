const user = require("../module/loginsignup");
const bcrypt = require("bcrypt");
const { accessToken, generatToken } = require("../Auth/jwt");

signup = async (req, res) => {
  console.log(req.body);
  if (req.body.email == undefined) {
    return res.send({ error: "Email can't be null" });
  }
  if (req.body.password == undefined) {
    return res.send({ error: "password can't be null" });
  }
  if (req.body.name == undefined) {
    return res.send({ error: "fullName can't be null" });
  }
  try {
    passw = req.body.password;
    passwo = passw.toString();
    const pass = await bcrypt.hash(passwo, 10);
    const users = {
      name: req.body.name,
      email: req.body.email,
      password: pass,
    };
    const data = await user.insertMany(users);
    console.log(data);
    res.send("Signup has successfully..");
  } catch (err) {
    res.send(err.message);
  }
};

login = async (req, res) => {
  if (req.body.email == undefined) {
    return res.send({ error: "Email can't be null" });
  }
  if (req.body.password == undefined) {
    return res.send({ error: "password can't be null" });
  }
  try {
    passw = req.body.password;
    passwo = passw.toString();
    const data = await user.findOne({ email: req.body.email });
    const comp = await bcrypt.compare(passwo, data.password);
    if (comp) {
      const token = generatToken(req.body.email);
      res.cookie("token", token);
      res.send("You have login this page successfully...");
      console.log("(You have login this page successfully...)");
    } else {
      res.send("User is not finding");
    }
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = { signup, login };
