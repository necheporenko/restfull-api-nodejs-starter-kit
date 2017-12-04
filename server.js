import mongoose, { Error } from 'mongoose';  
import app  from './app';
import {PORT, MONGODB_URL} from './config';

/**
 * Connection to db
 */
mongoose.connect(MONGODB_URL, {useMongoClient: true});
mongoose.connection.once('open', () => console.log('[*] MongoDB: Connection succeeded'));
mongoose.connection.on('error', () => { throw new Error('[*] MongoDB: Unable to connect') });


const server = app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`);
})