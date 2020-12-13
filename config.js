const JWTSECRET = process.env.JWTSECRET;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

module.exports = {
    jwtSecret: JWTSECRET,
    mongodburi: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@pizzaorder.rcjbc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
};