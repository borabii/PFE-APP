// MIDDLEWARE = function that has access to the request
// to CHECK if there's a TOKEN in the header
const jwt = require("jsonwebtoken");
const config = require("config"); //to access the "secret"

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token"); //request token inside the header with key 'x-auth-token'

  // Check if there is no token in req header
  if (!token) {
    // 401 = unauthorized
    return res.status(401).json({ msg: "authorization denied." });
  }

  // if token ther is token in req header
  try {
    // Verify the object(payload) -> decoded
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
    console.error(err);
  }
};
