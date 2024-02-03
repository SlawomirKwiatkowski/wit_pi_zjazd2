const router = require("express").Router();
const ListElement = require("../models/ListElement");
//routes
router
  .post("/add/listElement", (req, res) => {
    const { name } = req.body;
    const newListElement = new ListElement({ name });
    console.log("newListElement", newListElement);
    // sawe element
    newListElement
      .save()
      .then(() => {
        console.log("succesfully saved");
        console.log("name", name);
        res.redirect("/");
      })
      .catch((err) => console.log(error));
  })

  .delete("/delete/listElement/:_id", (req, res) => {
    const { _id } = req.params;
    console.log("_id", _id);
    ListElement.deleteOne({ _id })
      .then(() => {
        console.log("Deleted ListElement Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

module.exports = router;
