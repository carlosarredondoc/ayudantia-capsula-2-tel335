//let bcrypt = require('bcryptjs'); //Javascript Clasico
import bcrypt from 'bcryptjs'; //Javascript Moderno

let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync("MiContraseña", salt);
console.log(hash)

//Recibir por parametros post
let autorizar = bcrypt.compareSync("MiContraseña", hash);
console.log(autorizar)