const Salary = require("../salary/salary.model");
const Employee = require("./employee.model");

const buildSaveEmployeeJson = (props) => {
  const json = {};
  json.name = props.name;
  json.email = props.email || null;
  return json;
};

const buildSaveSalaryJson = ({ emp, employeeDetail }) => {
  const json = {};
  json.employee = emp;
  json.salary = employeeDetail.salary || 0;
  return json;
};

module.exports.addEmployee = async (employeeDetail) => {
  try {
    const employee = new Employee(buildSaveEmployeeJson(employeeDetail));
    const result = await employee.save();
    const emp = result._id;
    const salary = new Salary(buildSaveSalaryJson({ emp, employeeDetail }));
    const salaryResult = await salary.save();
    return { result, salaryResult };
  } catch (error) {
    throw error;
  }
};

module.exports.getEmployeesList = async () => {
  try {
    const employee = Employee.find().lean();
    return employee;
  } catch (error) {
    throw error;
  }
};

module.exports.checkEmployeeExist = async (email) => {
  try {
    const employee = await Employee.findOne({ email });
    return employee;
  } catch (error) {
    throw error;
  }
};

module.exports.getSalary = async (id) => {
  try {
    const salary = await Salary.findOne({ employee: id }).lean();
    return salary;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteEmployee = async (employeeId) => {
  try {
    const employee = await Employee.findByIdAndDelete(employeeId);
    return employee;
  } catch (error) {
    throw error;
  }
};

module.exports.updateEmployee = async (employeeId, params) => {
  try {
    const employee = await Employee.findOneAndUpdate(
      { _id: employeeId },
      params,
      {
        new: true,
      }
    );
    const salary = await Salary.findOneAndUpdate(
      { employee: employeeId },
      params,
      {
        new: true,
      }
    );
    return { employee, salary };
  } catch (error) {
    throw error;
  }
};
