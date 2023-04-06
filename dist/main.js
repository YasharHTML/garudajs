"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const root_not_found_error_1 = require("./errors/root_not_found_error");
const root = document.getElementById('root');
if (root !== null)
    throw new root_not_found_error_1.RootNotFoundError();
root.innerHTML = "Hey";
module.exports = 1