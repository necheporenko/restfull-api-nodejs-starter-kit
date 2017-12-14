import Note from '../models/note.model';

/** GET /api/v1/notes */
function list(req, res, next) {
    /** Get list of notes  */
    Note.find({})
        .then(notes => res.json(notes))
        .catch(e => next(e))
}

/** POST /api/v1/notes/ */
function create(req, res, next) {
    /** Create new note */
    const note = new Note();
    note.text = req.body.text;
    note.title = req.body.title;

    note.save()
        .then(savedNote => res.json(savedNote))
        .catch(e => next(e))
}

/** GET /api/v1/notes/:note_id */
function read(req, res, next) {
    /** Read note */
    Note.findById(req.params.note_id)
        .then(note => res.json(note))
        .catch(e => next(e))
}


/** DELETE /api/v1/notes/:note_id */
function remove(req, res, next) {
    /** Delete note */
    Note.findById(req.params.note_id)
        .then(note => {
            note.remove()
                    .then(deletedNote => res.json(deletedNote))
                    .catch(e => next(e))
            }
        )
        .catch(e => next(e));
}

/** PUT /api/v1/notes/:note_id */
function update(req, res, next) {
    /** Update note */
    Note.findByIdAndUpdate(req.params.note_id, req.body, { new: true })
        .then(note => res.json(note))
        .catch(e => next(e))
}

export default { list, create, remove, update, read};