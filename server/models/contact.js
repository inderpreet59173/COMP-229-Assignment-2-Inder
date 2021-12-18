// contact model (schema)

let mongoose = require('mongoose');

//create a model class (structure)
let contactModel = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String,
    contactno: Number
},
{
    collection: "contacts"      //table in db
})

module.exports = mongoose.model('Contact', contactModel);