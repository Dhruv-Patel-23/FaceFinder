const Clarifai = require("clarifai");

const app = new Clarifai.App({
  apiKey: "247b8bb5c576407ab14ab2c5bceb0da0",
});

const entryCount = (req, res, db) => {
  const { id } = req.body;
  db("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then((entries) => {
      res.json(entries[0].entries);
    })
    .catch((err) => {
      res.status(400).json("unable to get entries");
    });
};

const handleImage = (req, res, db) => {
  const { input } = req.body;
  app.models
    .predict("face-detection", input)
    .then((response) => {
      res.json(response)
      // Handle other responses as needed
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json("unable to process image");
    });
};

module.exports = {
  handleImage: handleImage,
  entryCount: entryCount,
};
