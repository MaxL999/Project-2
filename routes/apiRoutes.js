var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // Create a new example for the create.handlebars page
  app.post("/api/mixed", function(req, res) {
    // console.log(req.body)
    // res.json()
    db.Mixed.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/mixed/:id", function(req, res) {
    // console.log("deleted");
    db.Mixed.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
    // db.Mixed.destroy({ where: { id: req.params.id } })
    // .then(
    // });
  });
};
