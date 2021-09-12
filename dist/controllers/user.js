"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.send({
        msg: 'getUsers'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.send({
        msg: 'getUser',
        id
    });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const body = req.body;
    res.send({
        msg: 'postUser',
        body
    });
};
exports.postUser = postUser;
const updateUser = (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.send({
        msg: 'updateUser',
        body
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const id = req.body;
    res.send({
        msg: 'deleteUser',
        id
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.js.map