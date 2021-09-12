"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../routes/user"));
class Server {
    constructor() {
        this.paths = {
            users: '/api/users'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8001';
        this.middlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running in port ${this.port}`);
        });
    }
    routes() {
        this.app.use(this.paths.users, user_1.default);
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map