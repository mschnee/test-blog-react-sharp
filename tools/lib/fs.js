/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
"use strict";
var fs = require('fs');
var mkdirp = require('mkdirp');
var Promise = require('bluebird');
var writeFile = function (file, contents) { return new Promise(function (resolve, reject) {
    fs.writeFile(file, contents, 'utf8', function (err) { return err ? reject(err) : resolve(); });
}); };
var makeDir = function (name) { return new Promise(function (resolve, reject) {
    mkdirp(name, function (err) { return err ? reject(err) : resolve(); });
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = { writeFile: writeFile, makeDir: makeDir };
//# sourceMappingURL=fs.js.map