const Item = require("../models/itemModel");
const Category=require("../models/categoryModel");
const mongoose = require("mongoose");
const { validatePhone } = require("../services/mobileValidationService");

//task1.2:add item
const addItem = async (req, res) => {
  try {
    const { name, description, mobileNumber,category } = req.body;
   

    if (!name || !description || !category ) {
      return res.status(400).json({
        error: "name , description and category are required",
      });
    }

    let mobileData = {
      countryCode: "",
      countryName: "",
      operatorName: "",
    };

    // optional mobile validation
    if (mobileNumber) {
      const result = await validatePhone(mobileNumber);

      if (!result.valid) {
        return res.status(400).json({ error: "Invalid mobile number" });
      }

      mobileData = result;
    }

    const item = await Item.create({
      name,
      description,
      mobileNumber: mobileNumber || null,
      category,
      ...mobileData,
    });

    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//task1.3:update item

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid item id" });
    }

    const { mobileNumber } = req.body;

    //if there is mobile number
    if (mobileNumber) {
      const result = await validatePhone(mobileNumber);

      if (!result.valid) {
        return res.status(400).json({
          error: "Invalid mobile number",
          message: "Invalid mobile number"
        });
      }

      req.body.countryCode = result.countryCode;
      req.body.countryName = result.countryName;
      req.body.operatorName = result.operatorName;
    }

    //if user delete the number
    if (mobileNumber === "") {
      req.body.countryCode = "";
      req.body.countryName = "";
      req.body.operatorName = "";
    }

    const item = await Item.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return res.status(404).json({
        error: "No such item",
      });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
//task1.4:delete item

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid id" });
    }

    const item = await Item.findByIdAndDelete(id);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// task1.5:GET ALL
const getItems = async (req, res) => {
  try {
    const items = await Item.find().populate("category");
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports={addItem,updateItem,deleteItem,getItems};