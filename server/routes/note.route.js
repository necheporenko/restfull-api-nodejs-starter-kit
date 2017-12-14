import { Router } from 'express';
import noteCtrl from '../controllers/note.controller';

const router = Router();

router.route('/')
    /** GET /api/v1/notes - Get list of notes */
    .get(noteCtrl.list)

    /** POST */
    .post(noteCtrl.create);

router.route('/:note_id')
    /** GET /api/v1/notes/:note_id  - Read note*/
    .get(noteCtrl.read)

    /** DELETE /api/v1/notes/:note_id - Delete note */
    .delete(noteCtrl.remove)

    /** PUT /api/v1/notes/:note_id - Update note */
    .put(noteCtrl.update);

    

export default router;