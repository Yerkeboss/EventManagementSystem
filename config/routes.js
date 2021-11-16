/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': {
    view: 'pages/homepage'
  },


  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/

  'GET /': 'EventController.home',
  'GET /event/create': 'EventController.create',
  'POST /event/create': 'EventController.create',
  'GET /event': 'EventController.admin',

  'GET /event/admin': 'EventController.admin',
  'GET /event/json': 'EventController.json',

  'GET /event/read/:id': 'EventController.read',
  'POST /event/delete/:id': 'EventController.delete',

  'GET /event/update/:id': 'EventController.update',
  'POST /event/update/:id': 'EventController.update',

  'GET /event/search': 'EventController.search',
  'POST /event/search': 'EventController.paginate',

  'GET /event/paginate': 'EventController.paginate',

  'GET /user': 'UserController.login',
  'GET /user/login': 'UserController.login',
  'POST /user/login': 'UserController.login',
  'POST /user/logout': 'UserController.logout',

  'GET /event/registered/:id': 'EventController.registered',
  'POST /event/registered/:id': 'EventController.registered',

  'GET /event/:id/consultants': 'EventController.populate',
  'GET /user/:id/clients': 'UserController.populate',
  'POST /user/:id/clients/add/:fk': 'UserController.add',
  'POST /user/:id/clients/remove/:fk': 'UserController.remove',

  'GET /event/aginate': 'EventController.aginate',
};
