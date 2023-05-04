//const mongoose = require('mongoose'); // Javascript clasico
import mongoose from 'mongoose'; // Javascript moderno

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// OJO TODO LO QUE TENGA AWAIT DEBE IR EN UNA FUNCION ASINCRONICA
const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
await silence.save();


//Busqueda de un registro por su nombre
const buscar_uno = await Kitten.findOne({name: 'Silence'})
//buscar_uno._id

// Actualizar un registro
buscar_uno.name = "Ada";
// se debe guardar en la db
await buscar_uno.save();


// Eliminar un registro
await Kitten.deleteOne({name: 'Silence'})
//Forma alternativa
await buscar_uno.remove()

// Obtener todos los registros
const obtener_todos_los_registros = await Kitten.find()


