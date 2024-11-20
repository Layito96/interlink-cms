'use strict';

/**
 * tarification service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tarification.tarification');
