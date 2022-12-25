import { Types } from 'mongoose';
export interface User {
    username?: string;
    // password?: string,
    // firstname?: string,
    // lastname?: string,
    // email?: string,
    createdAt?: Date;
    _id?: Types.ObjectId;
}
