'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');
let currentEstimate;
let currentoverrun;

const userStore = {

  store: new JsonStore('./models/user-store.json', { users: [] }),
  collection: 'users',

  getAllUsers() {
    return this.store.findAll(this.collection);
  },

  addUser(user) {
 //   currentoverrun = Math.round(((buildRequestStore.buildRequest(loggedInUser(id)).estimatedCost[buildRequest(loggedInUser(id)).length] - buildRequest.budget)/buildRequest.budget)*100);
    this.store.add(this.collection, user);
    this.store.save();
  },
  
  

  getUserById(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  getUserByEmail(email) {
    return this.store.findOneBy(this.collection, { email: email });
  },
  
  
    
    //currentEstimate = this.store.estimatedCost[this.store.length].findBy(this.collection, { userid: userid });

 //getUserCurrentEstimate(userid) {
 //   currentEstimate = this.store.estimatedCost[this.store.length].findBy(this.collection, { userid: userid });
  
  
};

module.exports = userStore;