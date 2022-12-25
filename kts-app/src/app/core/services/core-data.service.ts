import { Injectable, Injector } from '@angular/core';
import { CoreApiService } from './core-api-service';
import { CoreAppConfigService } from './core-app-config.service';

@Injectable()
export class CoreDataService {
    protected apiServices: CoreApiService;
    protected appConfig: CoreAppConfigService;
    protected baseUrl: string | undefined;

    constructor(protected injector: Injector) {
        this.apiServices = this.injector.get(CoreApiService);
        this.appConfig = this.injector.get(CoreAppConfigService);
    }
}
