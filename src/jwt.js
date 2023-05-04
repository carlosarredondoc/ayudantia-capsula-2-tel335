//var jwt = require('jsonwebtoken'); // javascript nativo
import jwt from 'jsonwebtoken'; // ES6 o javascript moderno

//https://jwt.io/
let usuario = {"id":1,"nombre":"Pedro", "edad": 20,"correo":"pedro@dominio.cl","hashPassword":""}

let token_completo = jwt.sign(usuario, 'clave_secreta');
console.log(token_completo)

let clave = "Sup3rCl4v3"

let token_id_usuario = jwt.sign({ 'id': usuario.id},clave,{expiresIn: 60 * 60 * 24 * 30})
console.log(token_id_usuario)


let decoded = jwt.verify(token_id_usuario, clave);
console.log(decoded) // bar