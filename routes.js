"use strict";

const express = require("express");
const router = express.Router();

const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");
const estate = require("./controllers/estate.js");
const buildRequest = require("./controllers/buildrequest.js")
const accounts = require('./controllers/accounts.js');
const newbuilds = require("./controllers/newbuilds.js");
const renovations = require("./controllers/renovations.js");
const contact = require("./controllers/contact.js");

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get("/dashboard", dashboard.index);
router.get("/dashboard/deleteestate/:id", dashboard.deleteEstate);
router.post("/dashboard/addestate", dashboard.addEstate);
router.post("/dashboard/addbuildrequest", dashboard.addBuildRequest);
router.get("/dashboard/deletebuildrequest/:id", dashboard.deleteBuildRequest);
router.get("/dashboard/listbuildrequests");


router.get("/about", about.index);
router.get("/newbuilds", newbuilds.index);
router.get("/renovations", renovations.index);
router.get("/contact", contact.index);

router.get("/estate/:id", estate.index);
router.get("/estate/:id/deletehouse/:houseid", estate.deleteHouse);
router.post("/estate/:id/addhouse", estate.addHouse);


module.exports = router;
