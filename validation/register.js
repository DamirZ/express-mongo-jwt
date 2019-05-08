const isEmpty = require("is-empty");
const Validator = require("validator");

module.exports = function ValidateRegistration(inputData) {
    let errors = {};
    // Convert empty fields to string so we can validate it

    inputData.name = !isEmpty(inputData.name) ? inputData.name : "";
    inputData.email = !isEmpty(inputData.email) ? inputData.email : "";
    inputData.password = !isEmpty(inputData.password) ? inputData.password : "";
    inputData.password2 = !isEmpty(inputData.password2) ? inputData.password2 : "";

    // Name checks
    if (Validator.isEmpty(inputData.name)) {
        errors.name = "Name field is required and can't be left empty";
    }
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
    if (!Validator.isLength(inputData.password, { min: 8, max: 30 })) {
        errors.password = "Password must be at least 8 characters and 30 characters maximum";
    }
    if (Validator.isEmpty(inputData.password2)) {
        errors.password2 = "Confirm password field is required and can't be left empty";
    }
    if (!Validator.equals(inputData.password, inputData.password2)) {
        errors.password2 = "Password fields must match!";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};