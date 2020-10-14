
const initAllApi = (app) => {
  app.use("/users", require("./controllers/users"));
  app.use("/rooms", require("./controllers/rooms"));
}

module.exports = initAllApi

