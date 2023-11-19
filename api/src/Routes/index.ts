import express from 'express';
import { userSchema } from './Schemas/User';
import { handleLogin } from './Handlers/Auth';
import { valdiateJwt, validateSchema } from './Validators';
import cookieParser from 'cookie-parser';


const router = express.Router();
router.use(express.json());
router.use(cookieParser());

router.post('/login', validateSchema(userSchema), handleLogin)

export default router;
