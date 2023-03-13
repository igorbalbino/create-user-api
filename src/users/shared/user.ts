import { Document } from 'mongoose';

export class User extends Document {
    email: string;
    fName: string;
    lName: string;
    avatar: string;

    // super(email: string, fName: string, lName: string, avatar: string) {
    //     this.email = email;
    //     this.fName = fName;
    //     this.lName = lName;
    //     this.avatar = avatar;
    // }
}