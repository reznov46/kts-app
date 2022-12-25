import { Injectable, Injector } from '@angular/core';
import { Types } from 'mongoose';
import { Observable } from 'rxjs';
import { CoreDataService } from 'src/app/core/services/core-data.service';
import { Ammo } from 'src/app/shared/models/ammo';

@Injectable()
export class AmmoService extends CoreDataService {
    constructor(protected override injector: Injector) {
        super(injector);
        this.baseUrl = `${this.appConfig.getBaseUrl()}/ammo`;
    }

    getAmmos(): Observable<Ammo[]> {
        return this.apiServices.get(`${this.baseUrl}`);
    }
    getAmmo(id: Types.ObjectId): Observable<Ammo> {
        const url: string = `${this.baseUrl}/${id}`;
        return this.apiServices.get(url);
    }
    patchAmmo(ammo: Ammo): Observable<Ammo> {
        const url: string = `${this.baseUrl}/${ammo._id}`;
        return this.apiServices.patch(url, ammo);
    }

    postAmmo(ammo: Ammo): Observable<Ammo> {
        const url: string = `${this.baseUrl}`;
        return this.apiServices.post(url, ammo);
    }
}
