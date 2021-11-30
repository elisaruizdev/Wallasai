const express = require("express");

const router = express.Router();

const { isAuth } = require("../../middlewares/auth.middleware")


const { getAllPlants, getPlantByName, createPlant } = require("../controllers/plant.controller");

router.get("/", getAllPlants);
router.get("/:plantName", getPlantByName);
router.post("/create", createPlant);
router.get("/detail/:plantName", getPlantByName);

module.exports = router;