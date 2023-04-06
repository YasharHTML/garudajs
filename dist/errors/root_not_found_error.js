"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootNotFoundError = void 0;
class RootNotFoundError {
    constructor() {
        this.name = "Root Not Found";
        this.message = "Root element in index.html was not found";
    }
}
exports.RootNotFoundError = RootNotFoundError;
