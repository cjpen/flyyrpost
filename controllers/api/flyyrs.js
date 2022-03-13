const Flyyr = require('../../models/flyyr');

module.exports = {
    post,
    getAll,
    getOne
};

async function getOne(req, res) {
    const flyyr = await Flyyr.findById(req.params.id);
    res.json(flyyr);
}

async function getAll(req, res) {
    const flyyrs = await Flyyr.find({
        startDateTime: {$gt: new Date()}
    }).sort('startDateTime');
    res.json(flyyrs);
}

async function post(req, res) {
    req.body.userId = req.user._id;
    try {
        const newFlyyr = await Flyyr.create(req.body);
        res.json(newFlyyr);
    } catch(err) {
        res.status(400).json(err);
    }
}