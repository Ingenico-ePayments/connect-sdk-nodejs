"use strict";
var modules = {};

modules['create'] = require('./create');
// console.log(`Added create to module space`);
modules['approvesepadirectdebit'] = require('./approvesepadirectdebit');
// console.log(`Added approvesepadirectdebit to module space`);
modules['update'] = require('./update');
// console.log(`Added update to module space`);
modules['get'] = require('./get');
// console.log(`Added get to module space`);
modules['remove'] = require('./remove');
// console.log(`Added remove to module space`);

module.exports = modules;
