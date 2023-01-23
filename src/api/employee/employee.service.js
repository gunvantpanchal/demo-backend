const EmployeeDao = require("./employee.dao");
const { Format } = require("../../helper/format");
const { Error } = require("mongoose");

/**
 * Add Employee
 *
 * @param {props} params - Employee details
 */
module.exports.addEmployee = async (params) => {
  try {
    const employee = await EmployeeDao.checkEmployeeExist(params.email);
    if (employee) {
      return Format.error(null, "Already user Exist");
    } else {
      const result = await EmployeeDao.addEmployee(params);
      return Format.success(result, "Success");
    }
  } catch (error) {
    throw error;
  }
};

module.exports.getEmployeesList = async () => {
  try {
    let employees = await EmployeeDao.getEmployeesList();

    employees = await Promise.all( employees.map(async (employee) => {
      const salary = await EmployeeDao.getSalary(employee._id);
      return {
        ...employee,
        salary: salary.salary,
      };
    }));

    
    return Format.success(employees, "Success");
  } catch (error) {
    throw error;
  }
};

/* Delete Employee
 *
 * @param {props} employeeId - Employee id
 */

module.exports.deleteEmployee = async (employeeId) => {
  try {
    let employees = await EmployeeDao.deleteEmployee(employeeId);
    return Format.success(employees, "Success");
  } catch (error) {
    throw error;
  }
};


/* Update Employee
 *
 * @param {props} params- Employee data
 */

module.exports.updateEmployee = async (employeeId, params) => {
  try {
    let employees = await EmployeeDao.updateEmployee(employeeId, params);
    return Format.success(employees, "Success");
  } catch (error) {
    throw error;
  }
};