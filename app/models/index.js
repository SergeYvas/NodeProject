import Sequelize from 'sequelize';
import User from './user';
import Product from './product';
import config from '../config/config.json'

const envDB = config.development;

const sequelize = new Sequelize(envDB.database, envDB.username, envDB.password, {
    host: envDB.host,
    dialect: envDB.dialect,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  })
  
  const userModel = User(sequelize, Sequelize);
  const productModel = Product(sequelize, Sequelize);
  
  sequelize.sync()
    .then(() => {
      console.log(`Database alive`);
    })
  
  export default { userModel, productModel };
