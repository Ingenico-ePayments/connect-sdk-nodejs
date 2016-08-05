"use strict";
var modules = {};

modules['create'] = require('./create');
// console.log(`Added create to module space`);
modules['get'] = require('./get');
// console.log(`Added get to module space`);

module.exports = modules;
