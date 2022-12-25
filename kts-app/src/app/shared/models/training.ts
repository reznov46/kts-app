import { Types } from 'mongoose';
import { Gun } from './gun';
import { Participant } from './participant';
export interface Training {
    name?: string;
    date?: Date;
    gunsUsed?: Gun[];
    participants?: Participant[];
    ammoUsedAmmount?: number;
    _id?: Types.ObjectId;
}
