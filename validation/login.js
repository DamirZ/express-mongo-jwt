const isEmpty = require("is-empty");
const Validator = require("validator");

module.exports = function validateLogin(inputData) {
    let errors = {};
    // Convert empty fields to string so we can validate them

    inputData.email = !isEmpty(inputData.email) ? inputData.email : "";
    inputData.password = !isEmpty(inputData.password) ? inputData.password : "";

    // Email checks
    if (Validator.isEmpty(inputData.email)) {
        errors.email = "Email field is required and can't be left empty";
    } else if (!Validator.isEmail(inputData.email)) {
        errors.email = "Please enter valid email format";
    }
    // Password checks
    if (Validator.isEmpty(inputData.password)) {
        errors.password = "Password field is required and can't be left empty";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};