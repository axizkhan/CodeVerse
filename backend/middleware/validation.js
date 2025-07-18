const { 
  chapterSchema, 
  languageSchema, 
  membershipSchema, 
  orderSchema, 
  userSchema 
} = require('../utils/validationSchemas');
const ExpressError = require('../utils/ExpressError');

// Generic middleware factory
function makeValidate(schema, property = 'body') {
  return (req, res, next) => {
    const { error } = schema.validate(req[property]);
    if (error) {
      return next(new ExpressError(error.details[0].message, 400));
    }
    next();
  };
}

// Export specific middlewares
const validateChapter = makeValidate(chapterSchema);
const validateLanguage = makeValidate(languageSchema);
const validateMembership = makeValidate(membershipSchema);
const validateOrder = makeValidate(orderSchema);
const validateUser = makeValidate(userSchema);

module.exports = {
  validateChapter,
  validateLanguage,
  validateMembership,
  validateOrder,
  validateUser
};