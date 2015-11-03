/* global module, require */
'use strict';

const productSchema = require('./schemas/product_schema');
const discountCodeSchema = require('./schemas/discount_code_schema');

/**
 * @param {Object} db
 */
const productSchemas = (db) => {
    db.model('Product', productSchema);
    db.model('DiscountCode', discountCodeSchema);    
};

module.exports = productSchemas;
