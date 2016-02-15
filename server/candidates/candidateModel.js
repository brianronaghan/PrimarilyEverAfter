var mongoose = require('mongoose');
// var crypto = require('crypto');

var CandidateSchema = new mongoose.Schema({
 delegates: Number,
 link: String,
 name: String,
 twitter: String,
 money: Number,
 url: String
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

module.exports = mongoose.model('Candidate', CandidateSchema);
