const express = require("express");
const {
    addItem,
    updateItem,
    deleteItem,
    getItems
} = require("../controllers/itemController");

const router = express.Router();
//POST a new item
router.post("/items", addItem);
//UPDATE an item
router.patch("/items/:id", updateItem);
//DELETE an item
router.delete("/items/:id", deleteItem);
//GET all items
router.get("/items", getItems);
module.exports = router;