"use strict";

const logger = require("../utils/logger");
const estateStore = require("../models/estate-store");
const uuid = require("uuid");




const estate = {
  index(request, response) {
    const estateId = request.params.id;
    logger.debug("Estate id = ", estateId);
    const viewData = {
      title: "Estate",
      estate: estateStore.getEstate(estateId)
    };
    response.render("estate", viewData);
  },

  deleteHouse(request, response) {
    const estateId = request.params.id;
    const houseId = request.params.songid;
    logger.debug(`Deleting House ${houseId} from Estate ${estateId}`);
    estateStore.removeHouse(estateId, houseId);
    response.redirect("/estate/" + estateId);
  },

  addHouse(request, response) {
    const estateId = request.params.id;
    const estate = estateStore.getEstate(estateId);
    const newHouse = {
      id: uuid.v1(),
      title: request.body.title,
      type: request.body.type,
      cost: Number(request.body.cost),
    };
    logger.debug("New House = ", newHouse);
    estateStore.addHouse(estateId, newHouse);
    response.redirect("/estate/" + estateId);
  }
};

module.exports = estate;
