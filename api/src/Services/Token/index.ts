import jsw from 'jsonwebtoken';
import { Prisma } from '@prisma/client';

class Token {
  private secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  public buildFromUser(user: Prisma.UserGetPayload<{}>): string {
    const payload = {
      sub: user.id,
      name: user.username,
      exp: this.oneWeek()
    }

    return jsw.sign(payload, this.secret)
  }

  public isValid(token?: string): boolean  {
    if (!token) return false;

    try{
      const payload = jsw.verify(token, this.secret);

      if (typeof payload === 'string') {
        return false;
      }

      if (!payload.exp) return false 

      return (payload.exp > Date.now());
    } catch (error) {
      return false;
    }
  }

  private oneWeek(): number {
    return Date.now() * 60 * 60 * 24 * 7
  } 
}

export default new Token(process.env.SECRET || 'secret');
