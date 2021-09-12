import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {

    res.send({
        msg: 'getUsers'
    });

}


export const getUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.send({
        msg: 'getUser',
        id
    });

}


export const postUser = (req: Request, res: Response) => {

    const body = req.body;

    res.send({
        msg: 'postUser',
        body
    });

}

export const updateUser = (req: Request, res: Response) => {

    const { id } = req.params;
    const body = req.body;

    res.send({
        msg: 'updateUser',
        body
    });

}
export const deleteUser = (req: Request, res: Response) => {

    const id = req.body;

    res.send({
        msg: 'deleteUser',
        id
    });

}