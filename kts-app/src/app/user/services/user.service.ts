import { Injectable, Injector } from '@angular/core';
import { Types } from 'mongoose';
import { Observable } from 'rxjs';
import { CoreDataService } from 'src/app/core/services/core-data.service';
import { User } from 'src/app/shared/models/user';
@Injectable()
export class UserService extends CoreDataService {
    constructor(protected override injector: Injector) {
        super(injector);
        this.baseUrl = `${this.appConfig.getBaseUrl()}/users`;
    }

    getUsers(): Observable<User[]> {
        return this.apiServices.get(`${this.baseUrl}`);
    }
    getUser(id: Types.ObjectId): Observable<User> {
        const url: string = `${this.baseUrl}/${id}`;
        return this.apiServices.get(url);
    }
    patchUser(user: User): Observable<User> {
        const url: string = `${this.baseUrl}/${user._id}`;
        return this.apiServices.patch(url, user);
    }

    postUser(user: User): Observable<User> {
        const url: string = `${this.baseUrl}`;
        return this.apiServices.post(url, user);
    }
}
