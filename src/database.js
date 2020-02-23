import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb://192.168.239.128/graphq-db', {
            useNewUrlParser: true
        });
        console.log('>>> DB is connected');
    } catch {
        console.log('Somethign goes wrong!');
    }
}
