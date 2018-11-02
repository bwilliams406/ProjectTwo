module.exports = function(sequelize, DataTypes) {

const drink = sequelize.define('drink', {

    item_discription: {
      type: DataTypes.STRING,
      allowNull: false
    },

    part_number: {
      type: DataTypes.STRING,
      allowNull: false
    },

    weight_needed: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

   amount_instock: {
       type:DataTypes.FLOAT,
       allowNull: false
   },

    in_stock: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });

  return drink;
}
