const db = require('../models')


db.sequelize.sync().then(function () {
    db.lotion.bulkCreate([
        
    {
        item_discription: 'Purified Water USP',
        part_number: "51-20000",
        weight_needed: 51.0439,
        amount_instock: 10000,
        in_stock: true
    },

    {
        item_discription: 'ALOE CONCENTRATE',
        part_number: "41-0055",
        weight_needed: 2.3164,
        amount_instock: 5000,
        in_stock: true
    },

    {
        item_discription: 'METHYLPARABEN',
        part_number: "51-50200",
        weight_needed: 0.1390,
        amount_instock: 3000,
        in_stock: true
    },

    {
        item_discription: 'SODIUM PCA',
        part_number: "51-70575",
        weight_needed: 0.0386,
        amount_instock: 1000,
        in_stock: true
    },

    {
        item_discription: '(KELTROL CGT) XANTHAN GUM',
        part_number: "51-41350",
        weight_needed: 0.2316,
        amount_instock: 3000,
        in_stock: true
    },

    {
        item_discription: '1,3 BUTYLENE GLYCOL',
        part_number: "51-11900",
        weight_needed: 4.6328,
        amount_instock: 800,
        in_stock: true
    },

    {
        item_discription: 'OCTYL PALMITATE (Endimate EHP)',
        part_number: "51-12368",
        weight_needed: 4.2468,
        amount_instock: 900,
        in_stock: true
    },

    {
        item_discription: 'LEXOL PG-865/PROPYLENE GLYCOL',
        part_number: "51-42865",
        weight_needed: 2.3164,
        amount_instock: 500,
        in_stock: true
    },

    {
        item_discription: ' (LEXEMUL 515) GLYCERYL STEARA',
        part_number: "51-42515",
        weight_needed: 1.5443,
        amount_instock: 4000,
        in_stock: true
    },

    {
        item_discription: 'LEXEMUL 561',
        part_number: "51-42561",
        weight_needed: 0.6177,
        amount_instock: 4568,
        in_stock: true
    },

    {
        item_discription: 'CETYL ALCOHOL Rita CA',
        part_number: "51-12450",
        weight_needed: 0.3861,
        amount_instock: 400,
        in_stock: true
    },

    {
        item_discription: 'TOCOPHERYL ACETATE',
        part_number: "51-71700",
        weight_needed: 0.0008,
        amount_instock: 100,
        in_stock: true
    },

    {
        item_discription: 'RETINYL PALMITATE (VITAMIN A)',
        part_number: "51-62500",
        weight_needed: 0.0008,
        amount_instock: 120,
        in_stock: true
    },

    {
        item_discription: 'Glypure 99 (HP Glycolic Acid)',
        part_number: "21-71226",
        weight_needed: 2.3164,
        amount_instock: 6000,
        in_stock: true
    },

    {
        item_discription: 'PURIFIED WATER USP 231',
        part_number: "51-20001",
        weight_needed: 5.643,
        amount_instock: 10000,
        in_stock: true
    },

    {
        item_discription: 'BETA-GLUCAN 111957   min 20kg',
        part_number: "51-11100",
        weight_needed: 0.0008,
        amount_instock: 250,
        in_stock: true
    },

    {
        item_discription: 'ROSEMARY HS (Propylene Glycol)',
        part_number: "51-62650",
        weight_needed: 0.0077,
        amount_instock: 450,
        in_stock: true
    },

    {
        item_discription: 'DIAZOLIDINYL UREA (GERMALL II)',
        part_number: "51-30405",
        weight_needed: 0.1930,
        amount_instock: 2300,
        in_stock: true
    },

    {
        item_discription: 'PURIFIED WATER USP 5344',
        part_number: "51-20045",
        weight_needed: 1.034,
        amount_instock: 10000,
        in_stock: true
    },

    {
        item_discription: 'SEPIGEL 305',
        part_number: "51-70305",
        weight_needed: 1.3512,
        amount_instock: 3545,
        in_stock: true
    },




]).then(function (response) {
        console.log('Data added!') 

    }).catch(function (error) {
        console.log('Error', error);
    });

});

