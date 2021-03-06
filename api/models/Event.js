/**
 * Event.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
      name: {
        type: "string"
      },

      descrb: {
        type: "string"
      },

      message: {
        type: "string"
      },

      urlimg: {
        type: "string"
      },

      organizer: {
        type: "string"
      },

      date: {
        type: 'string',
        columnType: 'date'
      },

      starttime: {
        type: 'string',
        columnType: 'dateTime'
      },

      endtime: {
        type: 'string',
        columnType: 'dateTime'
      },

      venue: {
        type: "string"
      },

      startdate: {
        type: 'string',
        columnType: 'date'
      },

      enddate: {
        type: 'string',
        columnType: 'date'
      },

      quota: {
        type: "string"
      },

      highlight: {
        type: "string"
      },

      



      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
      consultants: {
        collection: 'User',
        via: 'clients'
      }
    },
    };
