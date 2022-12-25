import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GunViewComponent } from './gun-view/gun-view.component';
import { MagazineViewComponent } from './magazine-view/magazine-view.component';

const routes: Routes = [
    {
        path: '',
        component: MagazineViewComponent,
    },
    {
        path: `gun/:mode`,
        component: GunViewComponent,
    },
    {
        path: `gun/:mode/:id`,
        component: GunViewComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MagazineRoutingModule {}
