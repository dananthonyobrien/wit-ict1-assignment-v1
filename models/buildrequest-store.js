"use strict";

const _ = require("lodash");
const JsonStore = require("./json-store");
let estimatedCost;
let overrun;

const buildRequestStore = {
  store: new JsonStore("./models/buildrequest-store.json", {
    buildRequestCollection: []
  }),
  collection: "buildRequestCollection",

  getAllBuildRequests() {
    return this.store.findAll(this.collection);
  },

  getBuildRequest(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addBuildRequest(buildRequest) {
    if (buildRequest.finish === "s") {
      estimatedCost = buildRequest.size * 2500;
    } else if (buildRequest.finish === "l") {
      estimatedCost = buildRequest.size * 2800;
    } else {
      estimatedCost = "Input Error";
    }
    if (buildRequest.garage === "y") {
      estimatedCost = estimatedCost + 12000;
    } else if (buildRequest.garage === "n"){
      estimatedCost = estimatedCost;
    } else {estimatedCost = "Input Error"}
    if (buildRequest.patio === "y") {
      estimatedCost = estimatedCost + 2000;
    } else if (buildRequest.garage === "n"){
      estimatedCost = estimatedCost;
    } else estimatedCost = "Input Error";
      buildRequest.estimatedCost = estimatedCost;
    overrun = Math.round((estimatedCost - buildRequest.budget)/buildRequest.budget);
    buildRequest.overrun = overrun;
    this.store.add(this.collection, buildRequest);
    this.store.save();
  },

  currentBuildRequest(id) {
   const buildRequest = this.getBuildRequest(id);
  },
  
  
  removeBuildRequest(id) {
    const buildRequest = this.getBuildRequest(id);
    this.store.remove(this.collection, buildRequest);
    this.store.save();
  },

  removeAllBuildRequests() {
    this.store.removeAll(this.collection);
    this.store.save();
  },

  getUserBuildRequest(userid) {
    return this.store.findBy(this.collection, { userid: userid });
  }
};

module.exports = buildRequestStore;