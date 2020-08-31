"use strict";

const logger = require("../utils/logger");

const newbuilds = {
  index(request, response) {
    logger.info("new builds rendering");
    const viewData = {
      title: "newbuilds",
    };
    response.render("newbuilds", viewData);
  },
};

module.exports = newbuilds;
