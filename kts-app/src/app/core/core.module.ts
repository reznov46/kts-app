import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreDataService } from './services/core-data.service';
import { CoreApiService } from './services/core-api-service';
import { CoreAppConfigService } from './services/core-app-config.service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [CoreDataService, CoreAppConfigService, CoreApiService],
})
export class CoreModule {}
