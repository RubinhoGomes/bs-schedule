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
    hoursArray: {
      start: '08:00',
      end: '18:00',
      interval: 30,
    },
    header: [
      { 'name': 'Segunda' },
      { 'name': 'Terça' },
      { 'name': 'Quarta' },
      { 'name': 'Quinta' },
      { 'name': 'Sexta' },
      { 'name': 'Sabado' },
      { 'name': 'Domingo' },
    ],
  },

  utils: {
    calculateInterval: function (time, interval) => {
      const [hour, minute] = time.split(':').map(Number);
      const date = new Date();
      date.setHours(hour);
      date.setMinutes(minute + interval);
      return date.toTimeString().slice(0, 5);
    },

      getScheduleElement: function (event, hour) => {
        $('.schedule').find(hour . event.id) => {
          return $(this);
        }
      },

    // Implement a IsDarkColor function
    // Implement a getColor function

  }






}






} (jQuery))
