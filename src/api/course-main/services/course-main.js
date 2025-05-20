'use strict';

/**
 * course-main service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-main.course-main');
