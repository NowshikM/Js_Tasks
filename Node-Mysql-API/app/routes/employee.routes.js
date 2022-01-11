module.exports = app => {
  const emp = require("../controllers/employee.controller.js");

  var router = require("express").Router();

  const { check } = require('express-validator');

  // Create a new Employee
  router.post("/cb", [
    check('id').notEmpty().withMessage('Should not be empty').isAlphanumeric().withMessage('Should be a valid ID'),
    check('name').notEmpty().withMessage('Should not be empty').isAlpha().withMessage('Should contain only alphabets'),
    check('mobile').notEmpty().withMessage('Should not be empty').isMobilePhone().withMessage('Should be a valid MObile Number'),
    check('email').notEmpty().withMessage('Should not be empty').isEmail().withMessage('Should be a valid mail address'),
    check('role').notEmpty().withMessage('Should not be empty').isAlpha().withMessage('Should be a valid Position'),
    check('presence').notEmpty().withMessage('Should not be empty').isNumeric().withMessage('Should be a valid input'),
  ], emp.create);

  // Retrieve all PresentEmployees
  router.get("/cb/Prs", emp.findAllPresentEmp);

  // Retrieve all AbsentEmployees
  router.get("/cb/Abs", emp.findAllAbsentEmp);

  // Retrieve a single Employee with email
  router.get("/cb/:email", [check('email').notEmpty().withMessage('Should not be empty').isEmail().withMessage('Should be a valid mail Address')], emp.findOne);

  // Update a Employee Present with id
  router.put("/cb/Prs/:id", [check('id').notEmpty().withMessage('Should not be empty').isAlphanumeric().withMessage('Should be a valid ID')],
    emp.updatePresentIn);

  // Update a Employee Not Present with id
  router.put("/cb/Abs/:id", [check('id').notEmpty().withMessage('Should not be empty').isAlphanumeric().withMessage('Should be a valid ID')],
    emp.updatePresentOut);


  // Delete a Employee with id
  router.delete("/cb/:id", [check('id').notEmpty().withMessage('Should not be empty').isAlphanumeric().withMessage('Should be a valid ID')],
    emp.delete);

  // Delete all Employees
  router.delete("/cb", emp.deleteAll);

  app.use('', router);
};