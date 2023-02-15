const express = require("express");
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const router = express.Router();
const {validatorRegister, validatorLogin} = require("../validators/auth");

// TODO http://localhost:3001/api/auth/login
// TODO http://localhost:3001/api/auth/register
/**
 * Route register new user
 * @openapi
 * /auth/register:
 *    post:
 *      tags:
 *        - auth
 *      summary: "Register nuevo usuario"
 *      description: "Esta ruta es para registrar un nuevo usuario"
 *      requestBody:
 *        content:
 *          application/json:
 *              schema:
 *                $ref: "#/components/schemas/authRegister"
 *      responses:
 *              '201':
 *                  description: Usuario registrado de manera correcta
 *              '403':
 *                  description: Error por validación de usuario 
 */
router.post("/register", validatorRegister , registerCtrl)

router.post("/login", validatorLogin , loginCtrl)

module.exports = router