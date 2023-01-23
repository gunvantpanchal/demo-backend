const EmployeeController = require("./employee.conroller");
const router = require("express").Router();

/* Add Employee */
router.post("/add-employee", EmployeeController.addEmployee);

/* Get EmployeeLis */
router.get("/", EmployeeController.getEmployeesList);

/* Delete Employee */
router.delete("/:id", EmployeeController.deleteEmployee);

/* Update Employee Details */
router.put("/:id", EmployeeController.updateEmployee);

module.exports = router;
