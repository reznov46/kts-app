import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingGeneralComponent } from './training-general/training-general.component';
import { TrainingGunsComponent } from './training-guns/training-guns.component';
import { TrainingOutletComponent } from './training-outlet/training-outlet.component';
import { TrainingParticipantsComponent } from './training-participants/training-participants.component';
import { TrainingViewComponent } from './training-view/training-view.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';

const routes: Routes = [
    {
        path: '',
        component: TrainingOutletComponent,
        children: [
            {
                path: 'trainings-list',
                component: TrainingsListComponent,
            },
            {
                path: 'view/:id',
                component: TrainingViewComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'general',
                        pathMatch: 'full',
                    },
                    { path: 'general', component: TrainingGeneralComponent },
                    { path: 'guns', component: TrainingGunsComponent },
                    {
                        path: 'participants',
                        component: TrainingParticipantsComponent,
                    },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TrainingRoutingModule {}
