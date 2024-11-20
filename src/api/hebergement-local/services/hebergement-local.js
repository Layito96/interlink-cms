'use strict';

/**
 * hebergement-local service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hebergement-local.hebergement-local');
