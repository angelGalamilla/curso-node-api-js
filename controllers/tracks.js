const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError")
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {

  try {
    const user = req.user
    console.log(user)
    const data = await tracksModel.findAllData({})
    res.send({data, user})      
  } catch (e) {
    handleHttpError(res, "Quibo-ERROR_GET_ITEMS");
  }

}

const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const {id} = req;
    const data = await tracksModel.findOneData(id)
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
}

const createItem = async (req, res)  => {
  try {
    const body = matchedData(req)
    const data = await tracksModel.create(body)
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "Quibo-ERROR_CREATE_ITEM");
  }
}

const updateItem = async (req, res)  => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await tracksModel.findOneAndUpdate(
      id, body
    )
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "Quibo-ERROR_UPDATE_ITEM");
  }
}


const deleteItem = async (req, res)  => {
  try {
    req = matchedData(req);
    const {id} = req;
//    const data = await tracksModel.deleteOne({_id:id});
    // tracksModel.delete es borrado lógico con Robo 3T
    const data = await tracksModel.delete({_id:id});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_DELETE_ITEM");
  }
}

module.exports = { getItems,getItem,createItem,updateItem,deleteItem }; 