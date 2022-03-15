'use strict';

/**
 * mothership-message service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mothership-message.mothership-message');
