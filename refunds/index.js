"use strict";
var modules = {};

modules['cancel'] = require('./cancel');
// console.log(`Added cancel to module space`);
modules['approve'] = require('./approve');
// console.log(`Added approve to module space`);
modules['cancelapproval'] = require('./cancelapproval');
// console.log(`Added cancelapproval to module space`);
modules['get'] = require('./get');
// console.log(`Added get to module space`);

module.exports = modules;
