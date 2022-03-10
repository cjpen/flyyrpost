const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flyyrSchema = new Schema(
    eventTitle: { required: true, type: String },
    location: { required=true, type=String },
    promoter: { type=String },
    venue: { required=true, type=String },
    { designer: required=true, type=String},
    { tallent: type=String },
    { eventDetails: type=String },
    { ticketingLink: type=String },


);