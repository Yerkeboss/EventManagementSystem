/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  if (await Event.count() > 0) {
      return;
  }

  await Event.createEach([
    
      {
        "createdAt": 1635310349783,
        "updatedAt": 1635312132240,
        "id": 14,
        "name": "Halloween",
        "descrb": "Cool party",
        "message": "  Event is crazy.  ",
        "urlimg": "https://www.transparentpng.com/thumb/halloween/halloween-pumpkin-png-images-2.png",
        "organizer": "Google",
        "date": "2021-10-12",
        "starttime": "15:52",
        "endtime": "20:52",
        "venue": "Central",
        "startdate": "",
        "enddate": "",
        "quota": "available",
        "highlight": "on"
      },
      {
        "createdAt": 1635310414601,
        "updatedAt": 1635310774002,
        "id": 15,
        "name": "Nauryz",
        "descrb": "Super important.",
        "message": " Central Asian's celebration. ",
        "urlimg": "https://www.transparentpng.com/thumb/date-palm/i2TotD-date-palm-clipart-hd.png",
        "organizer": "Amazon",
        "date": "2021-10-27",
        "starttime": "16:53",
        "endtime": "18:53",
        "venue": "Tsim Sha Tsui",
        "startdate": "",
        "enddate": "",
        "quota": "available",
        "highlight": "on"
      },
      {
        "createdAt": 1635310518571,
        "updatedAt": 1635318072880,
        "id": 16,
        "name": "Workshop",
        "descrb": "Super crazy",
        "message": "  Cool event and useful.  ",
        "urlimg": "https://www.transparentpng.com/thumb/presentation/background-transparent-presentation-3.png",
        "organizer": "Microsoft",
        "date": "2021-10-05",
        "starttime": "15:00",
        "endtime": "17:55",
        "venue": "Jordan",
        "startdate": "",
        "enddate": "",
        "quota": "available",
        "highlight": ""
      },
      {
        "createdAt": 1635310575825,
        "updatedAt": 1635319699350,
        "id": 17,
        "name": "Consultation",
        "descrb": "Super crazy",
        "message": " Very useful. ",
        "urlimg": "https://www.transparentpng.com/thumb/team-work/team-work-photos-9.png",
        "organizer": "Google",
        "date": "2021-10-04",
        "starttime": "16:57",
        "endtime": "21:55",
        "venue": "Amazon",
        "startdate": "",
        "enddate": "",
        "quota": "nonavailable",
        "highlight": "on"
      },
      {
        "createdAt": 1635311781581,
        "updatedAt": 1635311781581,
        "id": 19,
        "name": "Birthday",
        "descrb": "Super crazy",
        "message": "Super cool party",
        "urlimg": "https://www.transparentpng.com/thumb/birthday-cake/red-birthday-cake-png-5.png",
        "organizer": "Microsoft",
        "date": "2021-10-08",
        "starttime": "13:18",
        "endtime": "17:16",
        "venue": "Jordan",
        "startdate": "",
        "enddate": "",
        "quota": "nonavailable",
        "highlight": ""
      },
      {
        "createdAt": 1635311853069,
        "updatedAt": 1635320010313,
        "id": 20,
        "name": "Wedding",
        "descrb": "Super crazy",
        "message": " Cool event. ",
        "urlimg": "https://www.transparentpng.com/thumb/groom/groom-romantic-people-wedding-couple-bride-icon-png-0.png",
        "organizer": "BEA",
        "date": "2021-10-15",
        "starttime": "16:21",
        "endtime": "19:23",
        "venue": "Jordan",
        "startdate": "",
        "enddate": "",
        "quota": "nonavailable",
        "highlight": "on"
      },
      {
        "createdAt": 1635311951015,
        "updatedAt": 1635311951015,
        "id": 21,
        "name": "New Year",
        "descrb": "Cool party",
        "message": "Crazy event.",
        "urlimg": "https://www.transparentpng.com/thumb/2018-new-year/happy-new-year-celebration-png-9.png",
        "organizer": "HSBS",
        "date": "2021-10-09",
        "starttime": "05:21",
        "endtime": "05:23",
        "venue": "Amazon",
        "startdate": "",
        "enddate": "",
        "quota": "nonavailable",
        "highlight": ""
      } 
  ]);
};

