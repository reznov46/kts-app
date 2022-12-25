import { Types } from 'mongoose';

export class Gun {
    name?: string;
    createdAt?: Date;
    _id?: Types.ObjectId;

    constructor() {}

    deserialize(object: any) {
        Object.assign(this, object);
        return this;
    }
}
