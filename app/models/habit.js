const mongoose = require('mongoose')

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  target: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Habit', habitSchema)
