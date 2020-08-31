"use strict";

const _ = require("lodash");
const JsonStore = require("./json-store");

const estateStore = {
  store: new JsonStore("./models/estate-store.json", {
    estateCollection: []
  }),
  collection: "estateCollection",

  getAllEstates() {
    return this.store.findAll(this.collection);
  },

  getEstate(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addEstate(estate) {
    this.store.add(this.collection, estate);
    this.store.save();
  },

  removeEstate(id) {
    const estate = this.getEstate(id);
    this.store.remove(this.collection, estate);
    this.store.save();
  },

  removeAllEstates() {
    this.store.removeAll(this.collection);
    this.store.save();
  },

  getUserEstates(userid) {
    return this.store.findBy(this.collection, { userid: userid });
  },
  
  addHouse(id, house) {
    const estate = this.getEstate(id);
    estate.houses.push(house);
    
    let averageCost = 0;
    for (let i = 0; i < estate.houses.length; i++){
      averageCost += (estate.houses[i].cost)/estate.houses.length;
    }
    estate.averageCost = averageCost;
    this.store.save();
  },

  removeHouse(id, houseId) {
    const estate = this.getEstate(id);
    const houses = estate.houses;
    _.remove(houses, { id: houseId });
    this.store.save();
  }
};

module.exports = estateStore;
