# Ingenico Connect Node.js SDK

## Introduction

The Node.js SDK helps you to communicate with the [Ingenico Connect](https://epayments.developer-ingenico.com/) Server API. Its primary features are:

* convenient JavaScript wrapper around the API calls,
* authentication of all calls
* logging support by proxying log calls to a custom user defined logger instance
* validation of input and
* a logfile obfuscater

See the [Ingenico ePayments Developer Hub](https://epayments.developer-ingenico.com/documentation/sdk/server/nodejs/) for more information on how to use the API.

## Structure of this repository

This repository consists out of one main component:

1. The source code of the SDK itself: `/`

## Requirements

Node.js 8 or higher is required.

## Installation

From the folder where your `package.json` is located, run the following command to install the SDK:

    npm i connect-sdk-nodejs

## Building the repository

From the root of the project install all dependencies: 

    npm install
