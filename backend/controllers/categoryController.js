const Category = require("../models/categoryModel");

// Add category
const addCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//delete category by id
const deleteCategory = async (req, res) => {

  try {

    const { id } = req.params;

    const category = await Category.findByIdAndDelete(id);

    if (!category) {

      return res.status(404).json({ error: "Category not found" });

    }

    res.status(200).json({ message: "Category deleted successfully" });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};

// Delete all categories

const deleteAllCategories = async (req, res) => {

  try {

    const result = await Category.deleteMany({});

    res.status(200).json({

      message: "All categories deleted successfully",

      deletedCount: result.deletedCount

    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};

module.exports = { addCategory, getCategories,deleteCategory,deleteAllCategories };