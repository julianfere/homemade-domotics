import { Request, Response, NextFunction } from 'express';
import { Schemas } from '../Schemas/types';
import Token from '../../Services/Token';
import {sendBadRequest, sendUnauthorized} from '../../Responses';

export const validateSchema = (schema: Schemas) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate(req.body);
    next();
  }
  catch (error) {
    sendBadRequest(res, error)
  }
};

export const valdiateJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (Token.isValid(token)) {
    next();
  }

  sendUnauthorized(res);
}
