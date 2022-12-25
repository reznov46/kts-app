import { Injectable, Injector } from '@angular/core';
import { Types } from 'mongoose';
import { Observable } from 'rxjs';
import { CoreAppConfigService } from 'src/app/core/services/core-app-config.service';
import { CoreDataService } from 'src/app/core/services/core-data.service';
import { Gun } from 'src/app/shared/models/gun';

@Injectable()
export class GunService extends CoreDataService {
    constructor(protected override injector: Injector) {
        super(injector);
        this.baseUrl = `${this.appConfig.getBaseUrl()}/guns`;
    }

    getGuns(): Observable<Gun[]> {
        return this.apiServices.get(`${this.baseUrl}`);
    }
    getGun(id: Types.ObjectId): Observable<Gun> {
        const url: string = `${this.baseUrl}/${id}`;
        return this.apiServices.get(url);
    }
    patchGun(gun: Gun): Observable<Gun> {
        const url: string = `${this.baseUrl}/${gun._id}`;
        return this.apiServices.patch(url, gun);
    }

    saveGun(gun: Gun): Observable<Gun> {
        const url: string = `${this.baseUrl}`;
        return this.apiServices.post(url, gun);
    }
}
