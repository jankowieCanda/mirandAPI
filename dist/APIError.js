"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIError = void 0;
class APIError extends Error {
    constructor(status, message, safe) {
        super(message);
        this.status = status;
        this.message = message;
        this.safe = safe;
    }
}
exports.APIError = APIError;
