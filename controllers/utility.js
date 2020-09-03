"use strict";

const logger = require("../utils/logger");
const accounts = require("./accounts.js");
const buildRequest = require("./buildrequest.js");
const buildRequestStore = require("../models/buildrequest-store");
//let currentEstimate;

const utility = {
  getUserCurrentEstimate(request) {
    const loggedInUser = request;
    let estimate = 440000;
    
    //let estimate = buildRequest.getCurrentBuildRequest(loggedInUser.id).estimatedCost;
    //if (buildRequestStore.getUserBuildRequest(loggedInUser.id).length > 0) estimate = buildRequest.getCurrentBuildRequest(loggedInUser.id).estimatedCost;
    //else estimate = "No Build Requests Submitted";
    return estimate;
    
    //let currentEstimate = buildRequestStore.getUserBuildRequest(loggedInUser.id)[buildRequestStore.getUserBuildRequest(loggedInUser.id).length];
  }
};
module.exports = utility;