const bcryptjs = require("bcryptjs")

const encrypt = async (passwordPlain) =>{
  const hash = await bcryptjs.hash(passwordPlain, 10)
  return hash
};

/**
 * Se pasa contraseña plana y hasheada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain, hashPassword) => {
  return await bcryptjs.compare(passwordPlain, hashPassword)
};

module.exports = { encrypt, compare };