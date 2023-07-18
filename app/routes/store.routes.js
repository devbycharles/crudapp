module.exports = app => {
  const stores = require("../controllers/store.controller.js");

  var router = require("express").Router();

  // Create a new store
  router.post("/", stores.create);

  // Retrieve all stores
  router.get("/", stores.findAll);

  // Retrieve a single store with id
  router.get("/:id", stores.findOne);

  // Update a store with id
  router.put("/:id", stores.update);

  // Delete a store with id
  router.delete("/:id", stores.delete);

  app.use('/api/stores', router);
};