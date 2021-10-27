/**
 * EventController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    // action - create
    create: async function (req, res) {

        if (req.method == "GET") return res.view('event/create');
        
        var event = await Event.create(req.body).fetch();
    
        return res.redirect('/event/admin');
    },
    // action - jsjson function
    json: async function (req, res) {

        var everyones = await Event.find();

        return res.json(everyones);
    },
    // action - admin
    admin: async function (req, res) {

        var everyones = await Event.find();
        
        return res.view('event/admin', { events: everyones });
    },
    // action - read
    read: async function (req, res) {

        var thatEvent = await Event.findOne(req.params.id);

        if (!thatEvent) return res.notFound();

        return res.view('event/read', { event: thatEvent })
    },
    // action - delete 
    delete: async function (req, res) {

        var deletedEvent = await Event.destroyOne(req.params.id);

        if (!deletedEvent) return res.notFound();

        return res.redirect('/event/admin');
    },
    // action - update
    update: async function (req, res) {

        if (req.method == "GET") {

            var thatEvent = await Event.findOne(req.params.id);

            if (!thatEvent) return res.notFound();

            return res.view('event/update', { event: thatEvent });
            
        } else {
        
            var updatedEvent = await Event.updateOne(req.params.id).set(req.body);

            if (!updatedEvent) return res.notFound();

            return res.redirect('/event/admin');
        }
    },

        search: async function(req, res) {
            var limit = Math.max(req.query.limit, 2) || 2;
            var skip = Math.max(req.query.offset, 0) || 0;
            var whereClause = {};
    
    
            var dateFrom = req.param.startdate;
            var dateTo = req.param.enddate;
    
            if (dateFrom) whereClause.date = { '>=': new Date(dateFrom).getTime() }
            if (dateTo) whereClause.date = { '>=': new Date(dateTo).getTime() }
            if (req.query.name) whereClause.name = { contains: req.query.name };
            if (req.query.organizer) whereClause.organizer = { contains: req.query.organizer };
            if (req.query.venue) whereClause.venue = { contains: req.query.venue };
    
    
            var events = await Event.find({
                where: whereClause,
                sort: 'createdAt',
                limit,
                skip
            });
    
            var numOfRecords = await Event.count();
    
            return res.view('event/search', { events, numOfRecords });
        },
                // action - paginate
        paginate: async function (req, res) {
    
            var limit = Math.max(req.query.limit, 2) || 2;
            var offset = Math.max(req.query.offset, 0) || 0;
    
            var someEvents = await Event.find({
                limit: limit,
                skip: offset
            });
    
            var count = await Event.count();
    
            return res.view('event/search', { events: someEvents, numOfRecords: count });
        },
            // action - home
    home: async function (req, res) {
        var limit = 4;
        var highlighted = await Event.find({

        where: { highlight: 'on' },
            limit: limit,
            sort: 'createdAt'
        });    
    return res.view('', { events: highlighted });
},

};



