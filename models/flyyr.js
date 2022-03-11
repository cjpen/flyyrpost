const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flyyrSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    flyyrImage: { required: false, type: String },
    eventTitle: { required: true, type: String },
    promoter: { type: String },
    talent: { type: String },
    designer: { required: true, type: String},
    venue: { required: true, type: String },
    address: { type: String },
    startDateTime: { required: true, type: Date},
    endDateTime: { type: Date},
    eventDetails: { type: String },
    ticketingLink: { type: String },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Flyyr', flyyrSchema);