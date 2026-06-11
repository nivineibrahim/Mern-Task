const axios = require("axios");

const validateMobile = async (req, res) => {
  try {
    const { mobileNumber } = req.body;
    const phone =
      typeof mobileNumber === "object" ? mobileNumber.number : mobileNumber;
    if (!mobileNumber) {
      return res.status(400).json({ error: "No mobile number provided" });
    }
    const response = await axios.get(
      `https://phoneintelligence.abstractapi.com/v1/?api_key=${process.env.API_KEY}&phone=${phone}`
    );
    const data = response.data;
    if (!data.phone_validation?.is_valid) {
      return res.status(400).json({ error: "Invalid mobile number" });
    }
    res.status(200).json({
      countryCode: data.phone_location?.country_code || "",
      countryName: data.phone_location?.country_name || "",
      operatorName: data.phone_carrier?.name || "",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { validateMobile };