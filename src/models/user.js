const mongoose = require("mongoose");
const UserSchame = mongoose.Schema({
  name_user: {
    type: String,
    /* require: true, */
  },
  lastname: {
    type: String,
    /* require: true, */
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    /* require: true, */
  },
  active: {
    type: Boolean,
    /* require: true, */
  },
  avatar: {
    type: String,
    /* require: false, */
  },
});

module.exports = mongoose.model("User", UserSchame);
