"use strict";
var modules = {};

modules['bankaccount'] = require('./bankaccount');
// console.log(`Added bankaccount to module space`);
modules['testconnection'] = require('./testconnection');
// console.log(`Added testconnection to module space`);
modules['getIINdetails'] = require('./getIINdetails');
// console.log(`Added getIINdetails to module space`);
modules['convertAmount'] = require('./convertAmount');
// console.log(`Added convertAmount to module space`);

module.exports = modules;
