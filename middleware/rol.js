const handleHttpError = require("../utils/handleError")
/**
 * Arrray con los roles permitidos
 * @param {*} rol 
 * @returns 
 */
const checkRol = (rol) => (req, res, next) => {
  try {
    const {user} = req;
    console.log(user);
    const rolesByUser = user.role;

    const checkValueRol = rol.some((rolSingle) => rolesByUser.includes(rolSingle)) // regresa boolean true o false
    if(!checkRol){
      handleHttpError(res, "USER_NOT_PERMISSIONS", 403)
      return
    }
    next();
  
  } catch (e) {
    handleHttpError(res, "ERROR_PERMISSIONS", 403)
  }
}

module.exports = checkRol;