const express = require("express");
const apiUi = require("../api/uiHandlers");

const uiRouter = express.Router();

uiRouter.get("/", apiUi.index);

uiRouter.get("/books/create", apiUi.create);

uiRouter.get("/books/:id/update", apiUi.update);

uiRouter.get("/books/:id", apiUi.view);

module.exports = uiRouter;
