import { Request, Response, NextFunction } from 'express';
import { isConnected } from '../utils/functions';

export async function isConnectedToDB(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    if (!isConnected()) res.sendStatus(500);
    else next();
}
