import {Request, Response} from 'express';
import Database from '../../../Database';
import Token from '../../../Services/Token';
import { sendUnauthorized, sendInternalServerError, sendOk } from '../../../Responses';

export const handleLogin = async (req: Request, res: Response) => {
  try {
    const params = {
      username: req.body.username,
      password: req.body.password
    }

    const user = await Database.getUser(params)

    if (!user) {
      sendUnauthorized(res);
      return;
    }

    const token = Token.buildFromUser(user);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
      }
    )

    sendOk(res)
  } catch (error) {
    sendInternalServerError(res, error);
  }
}
