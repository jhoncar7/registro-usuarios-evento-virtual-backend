

const auth = require('./auth');
const user = require('./user');
const country = require('./country');



module.exports = {
    ...auth,
    ...user,
    ...country
}