const router = require("express").Router();
const ListElement = require("../models/ListElement");

// For View
const shoppingListView = async (req, res) => {
  const allListElements = await ListElement.find();
  res.render("index", { listElements: allListElements });
};

//Post methods
const addListElement = (req, res) => {
  const { name } = req.body;
  console.log("name", name);
  const newListElement = new ListElement({ name: name, checked: false });
  console.log("newListElement", newListElement);
  // save element
  newListElement
    .save()
    .then(() => {
      console.log("succesfully saved");

      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

const deleteListElement = (req, res) => {
  const { _id } = req.params;
  console.log("_id", _id);
  ListElement.deleteOne({ _id })
    .then(() => {
      console.log("Deleted ListElement Successfully!");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

const editListElement = (req, res) => {
  const { _id } = req.params;
  const { checked } = req.body;
  console.log("_id", _id);
  console.log("checked", checked);
  ListElement.findOneAndUpdate({ _id }, { checked: true }, null)
    .then(() => {
      console.log("succesfully update");

      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

module.exports = {
  shoppingListView,
  addListElement,
  deleteListElement,
  editListElement,
};
