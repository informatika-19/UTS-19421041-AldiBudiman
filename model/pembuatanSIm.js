const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pembuatansimSchema = new Schema({
  namalengkap: {
    type: String
  },
  alamat: {
    type: Number
  },
  tinggi: {
    type: String
  },
  pekerjaan: {
    type: String
  },
  nosim: {
    type: Number
  },

})
module.exports = mongoose.model('pembuatansim', pembuatansimSchema)