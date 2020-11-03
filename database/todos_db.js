const mongoose = require("mongoose");

const schema = mongoose.Schema
mongoose.Promise = global.Promise;
const todoschema = new schema({
    todo: String,

})

const todoModel = mongoose.model("collection_todo", todoschema);
module.exports = todoModel;
