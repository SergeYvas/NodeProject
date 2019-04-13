'use strict';
function Product(sequelize, DataTypes) {
  let product = sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};

export default Product;