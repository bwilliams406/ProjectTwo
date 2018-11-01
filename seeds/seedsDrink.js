const db = require('../models/inventory');

db.sequelize.sync().then(function () {
    db.drinkInv.bulkCreate([{
        item_discription: 'Purified Water USP',
        part_number: "51-20000",
        weight_needed: 51.0439,
        amount_instock: 10000,
        in_stock: true
    }]).then(function (response) {
    console.log('Data2 added!')

    }).catch(function (error) {
    console.log('Error', error);
    }); 
});