import mongoose from 'mongoose';
import Promise from 'bluebird';
import app  from './app';
import { PORT, MONGODB_URL } from './config';


/** plugin bluebird promise in mongoose */
mongoose.Promise = Promise;

/**
 * Connection to db
 */
mongoose.connect(MONGODB_URL, {useMongoClient: true});
mongoose.connection.once('open', () => console.log('[*] MongoDB: Connection succeeded'));
mongoose.connection.on('error', () => { throw new Error('[*] MongoDB: Unable to connect') });


app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`);
});