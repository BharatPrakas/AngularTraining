Employee = require("../models").employee;
const getEmployees = async function (req, res) {
  let err;
  let response = { name: 'Boopathi' };
  console.log('getEmployees: ');
  // [err, response] = await to(Employee.findAll());
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.getEmployees = getEmployees;

const createEmployee = async function (req, res) {
  let err;
  let body = req.body;
  [err, response] = await to(Employee.create(body));
  console.log('createEmployee: ', body);
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.createEmployee = createEmployee;


const getEmployee = async function (req, res) {
  let err;
  [err, response] = await to(Employee.findAll());
  console.log('getEmployee: ', response);
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.getEmployee = getEmployee;

const getEmployeeRecord = async function (req, res) {
  let err;
  [err, response] = await to(Employee.findOne({
    where: {
      id: req.body.id
    }
  }));
  console.log('getEmployeeRecord: ', req.body);
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.getEmployeeRecord = getEmployeeRecord;


const updateRecord = async function (req, res) {
  let err;
  body = req.body;
  [err, response] = await to(Employee.update(body, {
    where: {
      id: req.body.id
    }
  }));
  console.log('updateRecord: ', body);
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.updateRecord = updateRecord;

const deleteRecord = async function (req, res) {
  let err;
  [err, response] = await to(Employee.destroy({
    where: {
      id: req.body.id
    }
  }));
  console.log('deleteRecord: ', response);
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.deleteRecord = deleteRecord;