const express = require("express");
const {
  createUser,
  login,
  updateUser,
} = require("../controllers/user");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/create").post(createUser);
router.route("/login").post(login);
router.route("/update").put(protect,updateUser);


module.exports = router;
