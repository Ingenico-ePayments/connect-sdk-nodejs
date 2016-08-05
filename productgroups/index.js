"use strict";
var modules = {};

modules['find'] = require('./find');
// console.log(`Added find to module space`);
modules['get'] = require('./get');
// console.log(`Added get to module space`);

module.exports = modules;
