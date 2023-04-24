var express = require('express');
var router = express.Router();

const EmployeeController = require('../controllers/employee.controller');
router.get('/getEmployees', EmployeeController.getEmployees);
router.post('/createEmployee', EmployeeController.createEmployee);
router.get('/getEmployee', EmployeeController.getEmployee);
router.post('/getEmployeeRecord', EmployeeController.getEmployeeRecord);
router.post('/updateRecord', EmployeeController.updateRecord)
router.post('/deleteRecord', EmployeeController.deleteRecord)

module.exports = router;
