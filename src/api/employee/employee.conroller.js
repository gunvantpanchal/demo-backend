const EmployeeService = require("./employee.service");

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 */
module.exports.addEmployee = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await EmployeeService.addEmployee(body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Get EmployeesList
 */
module.exports.getEmployeesList = async (req, res, next) => {
  try {
    const result = await EmployeeService.getEmployeesList();
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};


/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Get EmployeesList
 */
module.exports.deleteEmployee = async (req, res, next) => {
  try {
    const employeeId = req.params.id
    const result = await EmployeeService.deleteEmployee(employeeId);
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Get EmployeesList
 */
module.exports.updateEmployee = async (req, res, next) => {
  try {
    const result = await EmployeeService.updateEmployee(req.params.id, req.body);
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};



