import { Request, Response, NextFunction } from 'express';
import { IUser } from '../interfaces/user-interface';
import { registerUser, loginUser } from '../services/user-services';

export async function registerUserCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const user = {
        username: req.body.username,
        password: req.body.password,
    } as unknown as IUser;

    try {
        const status = await registerUser(user);

        res.sendStatus(status);
    } catch (e: any) {
        next(e);
    }
}

export async function loginUserCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const loginResult = await loginUser(
            req.body.username,
            req.body.password
        );

        const accessToken = loginResult ? { loginResult } : undefined;

        if (accessToken) res.json({ accessToken });
        else res.sendStatus(401);
    } catch (e: any) {
        next(e);
    }
}

export async function logoutUserCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    res.cookie('jwtAccessToken', '', { maxAge: 1 });
    res.redirect('/login');
}
