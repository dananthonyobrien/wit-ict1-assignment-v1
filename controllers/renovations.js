"use strict";

const logger = require("../utils/logger");

const renovations = {
  index(request, response) {
    logger.info("renovations rendering");
    const viewData = {
      title: "Renovations",
    };
    response.render("renovations", viewData);
  },
};

module.exports = renovations;
