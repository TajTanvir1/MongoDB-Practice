"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// parsers
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello Developers World!');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send("Got Data");
});
exports.default = app;
