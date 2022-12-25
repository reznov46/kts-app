import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagazineViewComponent } from './magazine-view/magazine-view.component';
import { MagazineRoutingModule } from './magazine-routing.module';
import { GunsListComponent } from './guns-list/guns-list.component';
import { TableModule } from 'primeng/table';
import { GunService } from './services/gun.service';
import { ButtonModule } from 'primeng/button';
import { GunViewComponent } from './gun-view/gun-view.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { AmmoListComponent } from './ammo-list/ammo-list.component';
import { AmmoService } from './services/ammo.service';
import { DialogModule } from 'primeng/dialog';

@NgModule({
    declarations: [
        MagazineViewComponent,
        GunsListComponent,
        GunViewComponent,
        AmmoListComponent,
    ],
    imports: [
        CommonModule,
        MagazineRoutingModule,
        TableModule,
        ButtonModule,
        FormsModule,
        InputTextModule,
        ToolbarModule,
        DialogModule,
    ],
    providers: [GunService, AmmoService],
})
export class MagazineModule {}
