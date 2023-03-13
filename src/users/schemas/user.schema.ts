import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    email: String,
    fName: String,
    lName: String,
    avatar: String
})