const post1 = require("../module/post");

const location = async (req, res) => {
  if (req.body.Geolocation == undefined) {
    return res.send({ error: "Geolocation can't be null" });
  }
  try {
    const data = await post1.aggregate([
      { $match: { Geolocation: req.body.Geolocation } },
    ]);
    res.send(data);
  } catch (err) {
    res.send("Your id is not exist..");
  }
};

module.exports = location;
