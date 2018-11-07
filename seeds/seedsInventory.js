const db = require('../models');

db.sequelize.sync().then(function () {
    db.inventory.bulkCreate([

        {
            item_discription: 'Glypure 996 (HP Glycolic Acid)',
            part_number: "21-71226",
            weight_needed: 2.3164,
            amount_instock: 6000,
            in_stock: true
        },

        {
            item_discription: 'PURIFIED WATER USP 2317',
            part_number: "51-20001",
            weight_needed: 5.643,
            amount_instock: 10000,
            in_stock: true
        },

        {
            item_discription: 'BETA-GLUCAN 1118957   min 20kg',
            part_number: "51-11100",
            weight_needed: 0.0008,
            amount_instock: 250,
            in_stock: true
        },

        {
            item_discription: 'ROSEMARY HS  12(Propylene Glycol)',
            part_number: "51-62650",
            weight_needed: 0.0077,
            amount_instock: 450,
            in_stock: true
        },

        {
            item_discription: 'DIAZOLIDINYL UREA 15 (GERMALL II)',
            part_number: "51-30405",
            weight_needed: 0.1930,
            amount_instock: 2300,
            in_stock: true
        },

        {
            item_discription: 'PURIFIED WATER USP 53444',
            part_number: "51-20045",
            weight_needed: 1.034,
            amount_instock: 10000,
            in_stock: true
        },

        {
            item_discription: 'SEPIGEL 3055',
            part_number: "51-70305",
            weight_needed: 1.3512,
            amount_instock: 3545,
            in_stock: true
        },

        {
            item_discription: 'Purified Water USP 13',
            part_number: "51-20000",
            weight_needed: 51.0439,
            amount_instock: 10000,
            in_stock: true
        },

        {
            item_discription: 'ALOE CONCENTRATE 56',
            part_number: "41-0055",
            weight_needed: 2.3164,
            amount_instock: 5000,
            in_stock: true
        },

        {
            item_discription: 'METHYLPARABEN 6',
            part_number: "51-50200",
            weight_needed: 0.1390,
            amount_instock: 3000,
            in_stock: true
        },

        {
            item_discription: 'SODIUM PCA 8',
            part_number: "51-78575",
            weight_needed: 0.0386,
            amount_instock: 1000,
            in_stock: true
        },

        {
            item_discription: '(KELTROL CGT) XANTHAN GUM 76',
            part_number: "51-41950",
            weight_needed: 0.2316,
            amount_instock: 3000,
            in_stock: true
        },

        {
            item_discription: '1,8 BUTYLENE GLYCOL',
            part_number: "51-17900",
            weight_needed: 4.6328,
            amount_instock: 800,
            in_stock: true
        },

        {
            item_discription: 'OCTYL PALMITATE 3 (Endimate EHP)',
            part_number: "51-15368",
            weight_needed: 4.2468,
            amount_instock: 900,
            in_stock: true
        },

        {
            item_discription: 'LEXOL PG-865/PROPYLENE GLYCOL 6',
            part_number: "51-41865",
            weight_needed: 2.3164,
            amount_instock: 500,
            in_stock: true
        },

        {
            item_discription: ' (LEXEMUL 515) GLYCERYL STEARA 515',
            part_number: "51-42315",
            weight_needed: 1.5443,
            amount_instock: 4000,
            in_stock: true
        },

        {
            item_discription: 'LEXEMUL 5617',
            part_number: "51-42861",
            weight_needed: 0.6177,
            amount_instock: 4568,
            in_stock: true
        },

        {
            item_discription: 'CETYL ALCOHOL Rita CA 43',
            part_number: "51-22450",
            weight_needed: 0.3861,
            amount_instock: 400,
            in_stock: true
        },

        {
            item_discription: 'TOCOPHERYL ACETATE 5',
            part_number: "51-73700",
            weight_needed: 0.0008,
            amount_instock: 100,
            in_stock: true
        },

        {
            item_discription: 'RETINYL PALMITATE 6(VITAMIN A)',
            part_number: "51-52500",
            weight_needed: 0.0008,
            amount_instock: 120,
            in_stock: true
        },
        {
            item_discription: 'ROSEMARY HS 3(Propylene Glycol)',
            part_number: "51-92650",
            weight_needed: 0.0077,
            amount_instock: 450,
            in_stock: true
        },

        {
            item_discription: 'DIAZOLIDINYL UREA 1(GERMALL II)',
            part_number: "51-37405",
            weight_needed: 0.1930,
            amount_instock: 2300,
            in_stock: true
        },

        {
            item_discription: 'PURIFIED WATER USP 5044',
            part_number: "51-20245",
            weight_needed: 1.034,
            amount_instock: 10000,
            in_stock: true
        },

        {
            item_discription: 'SEPIGEL 3056',
            part_number: "51-74305",
            weight_needed: 1.3512,
            amount_instock: 3545,
            in_stock: true
        },

        {
            item_discription: 'Purified Water USP 45',
            part_number: "51-20090",
            weight_needed: 51.0439,
            amount_instock: 10000,
            in_stock: true
        },

        {
            item_discription: 'ALOE CONCENTRATE 32',
            part_number: "41-0045",
            weight_needed: 2.3164,
            amount_instock: 5000,
            in_stock: true
        }


    ]).then(function (response) {
        console.log('Data2 added!')

    }).catch(function (error) {
        console.log('Error', error);
    });
});