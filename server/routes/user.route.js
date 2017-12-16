import passport from 'passport';
import { Router } from 'express';
import userCtrl from '../controllers/user.controller';

const router = Router();

/** POST /api/v1/user/signup */
router.post('/signup', userCtrl.signup);

/** POST /api/v1/user/signin */
router.post('/signin', userCtrl.signin);

/** GET /api/v1/user/profile */
router.get('/profile', passport.authenticate('jwt', { session: false }), userCtrl.getUser);

export default router;