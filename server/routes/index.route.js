import { Router } from 'express';
import noteRoutes from './note.route';

const router = Router();

/** Mount note routes at /notes */
router.use('/notes', noteRoutes);

export default router;