import { object, string } from 'yup';

export const userSchema = object({
  username: string().required(),
  password: string().required(),
});

export type UserSchema = typeof userSchema;