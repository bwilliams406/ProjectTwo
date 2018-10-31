module.exports = function(sequelize, DataTypes) {
    const lotionInv = sequelize.define('lotionInv', {

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
  
    return lotionInv;
    


    const drinkInv = sequelize.define('drinkInv', {

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
  
    return drinkInv;
  }  