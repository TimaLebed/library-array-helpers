var filter = require('./src/filter');
var foreach = require('./src/foreach');
var map = require('./src/map');
var reduce = require('./src/reduce');
var skip = require('./src/skip');
var take = require('./src/take');
var chain = require('./src/chain');
var value = require('./src/value');

module.exports = {
  filter: filter,
  foreach: foreach,
  map: map,
  reduce: reduce,
  skip: skip,
  take: take,
  chain: chain,
  value: value,
};
