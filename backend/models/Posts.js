const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Posts = new Schema({
   title: {
      type: String
   },
   post: {
      type: String
   },
   date: {
      type: String
   }
}, {
   collection: 'posts'
})

module.exports = mongoose.model('Posts', Posts)