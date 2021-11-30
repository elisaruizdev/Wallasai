const Plant = require("../models/Plant.model");

const HTTPSTATUSCODE = require("../../utils/httpStatusCode");


const getAllPlants = async (req, res, next) => {
  try {
    if (req.query.page) { 
      const page = parseInt(req.query.page);
      const skip = (page - 1) * 20;
      const plants = await Plant.find().skip(skip).limit(20);
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: { plants: plants},
      });
    } else {
      const plants= await Plant.find();
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: { plants: plants},
      });
    }
  } catch (err) {
    return next(err);
  }
};


const getPlantByName = async (req, res, next) => {
  try {
    const { plantName } = req.params 
    console.log(plantName)
    const plantByName = await Plant.findOne({name:plantName});
    console.log(plantByName)
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { plants: plantByName }
    });

  } catch (err) {
    return next(err);
  }
};

const getPlantById = async (req, res, next) => {
  try {
      const { plantId } = req.params;
      const plantById = await Plant.findById(plantId);
      return res.json({
          status: 200,
          message: HTTPSTATUSCODE[200],
          data: { plant: plantById }
      })
  } catch (error) {
      return next(error)
  }
}
const createPlant = async (req, res, next) => {
  try {
      const newPlant = new Plant();
      newPlant.name = req.body.name;
      newPlant.specie = req.body.specie;
      newPlant.img = req.body.img;
      newPlant.price = req.body.price;
      newPlant.description= req.body.description;
      const PlantDb = await newPlant.save();
      return res.json({
          status: 201,
          message: HTTPSTATUSCODE[201],
          data: { plant: PlantDb.name }
      })
  } catch (error) {
      return next(error);
  }
}

module.exports = {
  getAllPlants,
  createPlant,
  getPlantById,
  getPlantByName,
}

