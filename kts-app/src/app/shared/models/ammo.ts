import { Types } from 'mongoose';

export interface Ammo {
    caliber?: string;
    amount?: Number;
    _id?: Types.ObjectId;
}
