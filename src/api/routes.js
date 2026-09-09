const router = require("express").Router();

const EmployeeRoute = require("./employee/employee.routes");

router.use("/employee", EmployeeRoute);

module.exports = router;
