const express = require("express");
const db = require("../models/index");
const Emp = db.empStruct;
const { validationResult } = require('express-validator');


// Create and Save a new Emp
exports.create = (req, res) => {
  // Validate request
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send(
      {
        errors: errors.array()
      }
    )
  }

  // Create a Emp
  const emp = {
    id, name, role, email, mobile, presence
  } = req.body;

  // Save Emp in the database
  Emp.create(emp)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee."
      });
    });
};



// Retrieve all Present Employees from the database.
exports.findAllPresentEmp = (req, res) => {

  Emp.findAll({ where: { presence: 1 }, attributes: ['id', 'name'] },)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


// Retrieve all Absent Employees from the database.
exports.findAllAbsentEmp = (req, res) => {


  Emp.findAll({ where: { presence: 0 }, attributes: ['id', 'name'] },)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


// Find a single Employee with an email id
exports.findOne = (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send(
      {
        errors: errors.array()
      }
    )
  }

  const mail = req.params.email;

  Emp.findOne({ where: { email: mail } })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Employee with id=${mail}.`
        });
      }
    })
    .catch(err => {

      res.status(500).send({
        message: `Error retrieving Employee with id=${mail}.`
      });
    });
};

// Update a Employee Not Present by the id in the request
exports.updatePresentOut = (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send(
      {
        errors: errors.array()
      }
    )
  }
  const id = req.params.id;

  Emp.update({ presence: 0 }, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Employee with id=${id}. Maybe Employee was not found or Already updated`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Employee with id=" + id
      });
    });
};


// Update a Employee Present by the id in the request
exports.updatePresentIn = (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send(
      {
        errors: errors.array()
      }
    )
  }

  const id = req.params.id;

  Emp.update({ presence: 1 }, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Employee with id=${id}. Maybe Employee was not found or Already updated!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Employee with id=${id}.`
      });
    });
};


// Delete a Employee with the specified id in the request
exports.delete = (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send(
      {
        errors: errors.array()
      }
    )
  }

  const id = req.params.id;

  Emp.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Employee with id=${id}.`
      });
    });
};

// Delete all Employees from the database.
exports.deleteAll = (req, res) => {
  Emp.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Employees were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};


