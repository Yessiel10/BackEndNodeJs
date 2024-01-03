const express = require("express");
const campsiteRouter = express.Router();

campsiteRouter.route("/").all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});

campsiteRouter.get("/", (req, res) => {
  res.end("Will send all the campsites to you");
});

campsiteRouter.post("/", (req, res) => {
  res.end(
    `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
  );
});

campsiteRouter.put("/", (req, res) => {
  res.statusCode = 403;
  res.end("PUT operation not supported on /campsites");
});

campsiteRouter.delete("/", (req, res) => {
  res.end("Deleting all campsites");
});

//========================================================================================/

campsiteRouter.get("/:campsiteId", (req, res) => {
  res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});

campsiteRouter.post("/:campsiteId", (req, res) => {
  res.statusCode = 403;
  res.end(
    `POST operation not supported on /campsites/${req.params.campsiteId}`
  );
});

campsiteRouter.put("/:campsiteId", (req, res) => {
  res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
  res.end(`Will update the campsite: ${req.body.name}
      with description: ${req.body.description}`);
});

campsiteRouter.delete("/:campsiteId", (req, res) => {
  res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

module.exports = campsiteRouter;
