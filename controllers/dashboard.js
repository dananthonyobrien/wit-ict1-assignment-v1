"use strict";

const logger = require("../utils/logger");
const buildRequestStore = require("../models/buildrequest-store");
const uuid = require("uuid");
const accounts = require("./accounts.js");
const userStore = require("../models/user-store");
const utility = require("./utility.js");
let currentEstimate;

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    //const user = userStore.getUserById(request.params.id);
    const viewData = {
      title: "Dashboard",
      buildrequest: buildRequestStore.getUserBuildRequest(loggedInUser.id),
      user: userStore.getUserById(loggedInUser.id),
      estimate: utility.getUserCurrentEstimate(loggedInUser.id)
      //currentestimate: userStore.getCurrentestimate(user),
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

  getCurrentEstimate(request, response) {
    const buildRequestId = request.params.id;
    buildRequestStore.length;
    currentEstimate = buildRequest.estimatedCost[buildRequest.length];
  }
};

module.exports = dashboard;
