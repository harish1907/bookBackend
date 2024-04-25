const apiRoutes = require("express").Router();
const authRoutes = require("./auth.route");
const bookRoutes = require("../api/book.route");

const validateAccessToken = require("../../middleware/jwt_validation");

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/book", validateAccessToken, bookRoutes);

module.exports = apiRoutes;
