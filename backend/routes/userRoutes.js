const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
router.post("/", createUser);

module.exports = router;
