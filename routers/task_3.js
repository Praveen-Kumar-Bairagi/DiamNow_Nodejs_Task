const router = require("express").Router();
const {
  datapost,
  dataget,
  putdata,
  deletedata,
} = require("../controllers/post");

router.post("/data", datapost);
router.get("/data/:id", dataget);
router.put("/data/:id", putdata);
router.delete("/data/:id", deletedata);
module.exports = router;
