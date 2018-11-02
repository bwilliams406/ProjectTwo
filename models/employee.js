module.exports = function(sequelize, DataTypes) {

    const employee = sequelize.define('employee', {
    
       name: {
          type: DataTypes.STRING,
          allowNull: false
        },
    
       phone_number: {
          type: DataTypes.STRING,
          allowNull: false
        },
    
       office_number: {
          type: DataTypes.STRING,
          allowNull: false
        },
    
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:"p00rM3@hotbraille.com"
          },
    
        full_time: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
        }
      });
  
      return employee;

    }