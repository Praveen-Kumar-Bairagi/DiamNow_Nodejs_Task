const router = require("express").Router();
const { active, Inactive } = require("../controllers/activeinactive");

router.get("/active", active);
router.get("/inactive", Inactive);
module.exports = router;
