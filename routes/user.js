
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send('user', { table: "table" });
};