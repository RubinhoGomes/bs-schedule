/**
 * @fileOverview A jQuery plugin for managing a simple and flexible schedule built on Bootstrap
 *
 *
 * @author: Rubinho Gomes
 * @version: 0.1
 * @license: MIT
 */

($function($) {
'use strict';

/**
 * @module schedule
 *
 */

$.schedule = function(options) {

  setDefaults: function (options) {
    this.DEFAULTS = $.extend(true, {}, this.DEFAULTS, options || {});
  },

  getDefaults: function () {
    return this.DEFAULTS;
  },
 
  DEFAULTS: {
    titlle: 'Schedule',
    locale: 'pt-PT',
    url: null,
    defaultColor: 'primary',
    formatter: {
      info: formatterInfo
    },
  }

  

}






} (jQuery))
