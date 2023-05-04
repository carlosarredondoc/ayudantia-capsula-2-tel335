//const { Sequelize } = require('sequelize'); //Javascript clasico
import { Sequelize } from 'sequelize'; //Javascript moderno

const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
const connect = async () => {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
}
connect()

// Para Generar un modelo
const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });
  
  // Crear un registro
  const jane = await User.create({ firstName: "Jane" , lastName: "Doe"});
  //await jane.save();

   // Actualizar un registro
  jane.name = "Ada";
  // se debe guardar en la db
  //Ojo si estan en la funcionalidad del enpoint deben definir la funcion como asincronica
  await jane.save();

