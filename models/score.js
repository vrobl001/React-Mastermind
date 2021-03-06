const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema(
  {
    initials: String,
    numGuesses: Number,
    seconds: Number,
  },
  {
    timestamps: true,
  }
);

scoreSchema.pre('save', function (next) {
  this.initials = this.initials.substr(0, 3).toUpperCase();
  next();
});

module.exports = mongoose.model('Score', scoreSchema);
