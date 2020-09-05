"use strict";

const logger = require("../utils/logger");
const accounts = require("./accounts.js");
const buildRequest = require("./buildrequest.js");
const buildRequestStore = require("../models/buildrequest-store");
//let currentEstimate;

const utility = {
  getUserCurrentEstimate(request) {
    const loggedInUser = request;
    let estimate = 10;
    
   // let estimate; 
   // let estimate = 440000*2;
    
    //let estimate = buildRequest.getCurrentBuildRequest(loggedInUser.id).budget;
    //if (buildRequestStore.getUserBuildRequest(loggedInUser.id).length > 0) {
    //  estimate = buildRequest.getCurrentBuildRequest(loggedInUser.id).budget;
    //} else estimate = "No Build Requests Submitted";
    //return estimate;
    //let last = buildRequestStore.getUserBuildRequest(loggedInUser.id).length-1;
    //let estimate = buildRequestStore.getUserBuildRequest(loggedInUser.id)[last];

    return estimate;
  }
};
module.exports = utility;