const asyncHandler = require("express-async-handler");

// @desc Get user details
// @route GET /api/user:id
// @access Private
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get user details" });
});

// @desc Create new user
// @route POST /api/user
// @access Private
const createUser = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: "Created user" });
});

// @desc Update user
// @route PUT /api/user:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated user ${req.params.id}` });
});

// @desc Delete user
// @route DELETE /api/user:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted user ${req.params.id}` });
});

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
