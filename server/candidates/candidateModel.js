var mongoose = require('mongoose');
// var crypto = require('crypto');

var CandidateSchema = new mongoose.Schema({
  name: {type: String, unique:true, dropDups:true},
  party: String,
  image: String,
  delegateCount: Number,
  link: String,
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
