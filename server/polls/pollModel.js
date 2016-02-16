var mongoose = require('mongoose');
// var crypto = require('crypto');

var PollSchema = new mongoose.Schema({
  pollster: String,
  endDate: Date,
  method: String,
  party: String,
  polled: Number,
  results: Array
});

// var createSha = function (url) {
//   var shasum = crypto.createHash('sha1');
//   shasum.update(url);
//   return shasum.digest('hex').slice(0, 5);
// };
//
// LinkSchema.pre('save', function (next) {
//   var code = createSha(this.url);
//   this.code = code;
//   next();
// });

module.exports = mongoose.model('Poll', PollSchema);
