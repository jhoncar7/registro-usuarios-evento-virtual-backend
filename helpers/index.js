

const validator = require('./db-validators');
const emailHtml = require('./email-html');
const sendCode = require('./send-code');



module.exports = {
    ...validator,
    ...emailHtml,
    ...sendCode
}