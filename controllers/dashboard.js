"use strict";

const logger = require("../utils/logger");
const buildRequestStore = require("../models/buildrequest-store");
const estateStore = require("../models/estate-store");
const uuid = require("uuid");
const accounts = require("./accounts.js");
const userStore = require("../models/user-store");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
      title: "Build Request Dashboard",
      buildrequest: buildRequestStore.getUserBuildRequest(loggedInUser.id),
      title: "Estate Dashboard",
      estate: estateStore.getUserEstates(loggedInUser.id)
    };
    logger.info("about to render", buildRequestStore.getAllBuildRequests());
    response.render("dashboard", viewData);
  },

  addBuildRequest(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newBuildRequest = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      name: request.body.name,
      type: request.body.type,
      size: request.body.size,
      finish: request.body.finish,
      garage: request.body.garage,
      patio: request.body.patio,
      addinfo: request.body.addinfo,
      budget: request.body.budget
    };

    logger.debug("Creating a new Build Request", newBuildRequest);
    buildRequestStore.addBuildRequest(newBuildRequest);
    response.redirect("/dashboard");
  },

  deleteBuildRequest(request, response) {
    const buildRequestId = request.params.id;
    logger.debug(`Deleting build request ${buildRequestId}`);
    buildRequestStore.removeBuildRequest(buildRequestId);
    response.redirect("/dashboard");
  },

  deleteEstate(request, response) {
    const estateId = request.params.id;
    logger.debug(`Deleting Estate ${estateId}`);
    estateStore.removeEstate(estateId);
    response.redirect("/dashboard");
  },

  addEstate(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newEstate = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      title: request.body.title,
      houses: []
    };
    logger.debug("Creating a new Estate", newEstate);
    estateStore.addEstate(newEstate);
    response.redirect("/dashboard");
  }
};

module.exports = dashboard;
