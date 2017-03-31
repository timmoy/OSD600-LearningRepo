// [INFO] See discussion of node.js exports here:
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */
/* exports.isValidEmail = (function validate(email) {
    // TODO: needs to be implemented
  const test = email.trim();
  if (!test.equals('')) {
    if (test.includes('@myseneca.ca')) {
      return true;
    }
  }
  return false;
});*/

exports.isValidEmail = function isValidEmail(email) {
  if (email) {
    if (email.toString().includes(' ')) {
      return false;
    }
    return /@myseneca.ca$/.test(email) || /@senecacollege.ca$/.test(email) || /@senecac.on.ca$/.test(email);
  }
  return false;
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = (function format(name) {
  // TODO: needs to be implemented
  if (name) {
    let test = name.toString();
    test = test.trim();
    test = test.replace(' ', '');
    test = test.replace('@', '');
    test = test.replace('.', '');
    test += '@myseneca.ca';
    return test;
  }
  return false;
});
