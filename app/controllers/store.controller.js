const db = require("../models");
const Store = db.stores;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Name is required"
    });
    return;
  }
  if (!req.body.profession) {
    res.status(400).send({
      message: "Profession is required"
    });
    return;
  }

  const store = {
    name: req.body.name,
    profession: req.body.profession,
    age: req.body.age,
    birth: req.body.birth,
    privacy: req.body.privacy ? req.body.privacy : false
  };

  Store.create(store)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error occurred while creating the Store."
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Store.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving the Stores."
      });
    });

};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Store.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find the Store with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving the Store with id=" + id
      });
    });
};

exports.update = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Name is required"
    });
    return;
  }
  if (!req.body.profession) {
    res.status(400).send({
      message: "Profession is required"
    });
    return;
  }

  const id = req.params.id;

  Store.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Store was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update the Store with id=${id}. Maybe Store was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating the Store with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Store.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Store was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete the Store with id=${id}. Maybe the Store was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete the Store with id=" + id
      });
    });
};