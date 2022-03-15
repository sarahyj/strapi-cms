'use strict';

/**
 * join-the-family service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::join-the-family.join-the-family');
