import { Response } from "express";

export const sendOk = (res: Response, data: any) => {
  res.status(200).json({ data });
}

export const sendCreated = (res: Response, data: any) => {
  res.status(201).json({ data });
}

export const sendBadRequest = (res: Response, message: any) => {
  res.status(400).json({ message });
}

export const sendUnauthorized = (res: Response) => {
  res.status(401).json({ error: 'Unauthorized' });
}

export const sendInternalServerError = (res: Response, error?: any) => {
  res.status(500).json({ error });
}