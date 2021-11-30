const Picture = require("../models/Picture.model");

const fs = require("fs");

const getAllPictures = async (req, res, next) => {
  try {
    const pictures = await Picture.find();
    return res.json({
      status: 200,
      message: "Imágenes obtenida correctamente",
      data: { pictures: pictures },
    });
  } catch (err) {
    return next(err);
  }
};

const getPictureById = async (req, res, next) => {
  try {
    const { pictureId } = req.params;
    const pictureById = await Picture.findById(pictureId);
    return res.json({
      status: 200,
      message: "Imagen obtenida correctamente por Id",
      data: { picture: pictureById },
    });
  } catch (err) {
    return next(err);
  }
};

const postNewPicture = async (req, res, next) => {
  try {
    let picture = req.file ? req.file.url : null;
    console.log(req.file)
    const newPicture = new Picture({
      picture: picture,
      createdBy: [],
      createdPlant: [],
    });

    const createdPicture = await newPicture.save();

    return res.status(201).json(createdPicture);
  } catch (error) {
    next(error);
  }
};

const deletePicture = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Picture.findByIdAndDelete(id);
    return res.status(200).json("Imagen borrada correctamente");
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  getAllPictures,
  getPictureById,
  postNewPicture,
  deletePicture,
};
