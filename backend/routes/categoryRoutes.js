const express = require("express");
const { addCategory, getCategories,deleteCategory,deleteAllCategories } = require("../controllers/categoryController");

const router = express.Router();

router.post("/categories", addCategory);
router.get("/categories", getCategories);
router.delete("/categories/:id",deleteCategory);
router.delete("/categories",deleteAllCategories);

module.exports = router;