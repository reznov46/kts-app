import { AmmoUsed } from './ammoUsed';
import { User } from './user';

export interface Participant {
    user: User;
    ammoUsed: AmmoUsed;
}
