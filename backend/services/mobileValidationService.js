const axios = require("axios");

const validatePhone = async (phone) => {
  const response = await axios.get(
    `https://phoneintelligence.abstractapi.com/v1/?api_key=${process.env.API_KEY}&phone=${phone}`
  );

  const data = response.data;

  const isValid = data.valid || data.phone_validation?.is_valid;

  if (!isValid) {
    return { valid: false };
  }

  return {
    valid: true,
    countryCode: data.phone_location?.country_code || "",
    countryName: data.phone_location?.country_name || "",
    operatorName: data.phone_carrier?.name || "",
  };
};

module.exports = { validatePhone };