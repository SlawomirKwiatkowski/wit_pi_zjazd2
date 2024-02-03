const router = require("express").Router();
const {
  shoppingListView,
  addListElement,
  deleteListElement,
  editListElement,
} = require("../controllers/ListElementControler");

router.get("/", shoppingListView);

router.post("/add/listElement", addListElement);

router.get("/delete/listElement/:_id", deleteListElement);

router.post("/edit/listElement/:_id", editListElement);

module.exports = router;
