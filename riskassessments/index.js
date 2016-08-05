"use strict";
var modules = {};

modules['cards'] = require('./cards');
// console.log(`Added cards to module space`);
modules['bankaccounts'] = require('./bankaccounts');
// console.log(`Added bankaccounts to module space`);

module.exports = modules;
