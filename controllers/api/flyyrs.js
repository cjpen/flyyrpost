const Flyyr = require('../../models/flyyr');

module.exports = {
    post,
    getAll,
    getOne,
    update,
    delete: deleteFlyyr
};

async function deleteFlyyr(req, res) {
    const deletedFlyyr = await Flyyr.findByIdAndDelete(req.params.id)
    res.json(deletedFlyyr);
}

async function update(req, res) {
    const updatedFlyyr = await Flyyr.findByIdAndUpdate(req.params.id, req.body.formData, {new: true})
    res.json(updatedFlyyr);
}

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