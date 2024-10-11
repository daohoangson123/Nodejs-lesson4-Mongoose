import mongoose from 'mongoose';

async function connectToDatabase() {
    try {
        const uri =
            'mongodb+srv://dhsfrontend:grimangel123456@cluster0.vmaoxjo.mongodb.net/demo_auth?retryWrites=true&w=majority&appName=Cluster0';
        await mongoose.connect(uri);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log('Connected to Database');
    } catch (error) {
        console.log("Can't connect to database", error);
    }
}

export default connectToDatabase;
