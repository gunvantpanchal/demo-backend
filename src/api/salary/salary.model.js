const mongoose = require("mongoose");

const salarySchema = mongoose.Schema({
  salary: {
    type: Number,
    required: true,
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
});

module.exports = mongoose.model("Salary", salarySchema);
