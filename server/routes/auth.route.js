import { Router } from "express";
import User from '../models/User.js';

import { register } from "../controllers/auth.js";
import { login } from "../controllers/auth.js";
import { getMe } from "../controllers/auth.js";

const router = new Router();

router.post('/registration', register);

router.post('/login', login);

router.post('/me', getMe);


export default router;
