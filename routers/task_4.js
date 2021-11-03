const router = require("express").Router();
const location = require("../controllers/location");

router.post("/location", location);

module.exports = router;
