import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingOutletComponent } from './training-outlet/training-outlet.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TrainingService } from './services/traning.service';
import { TrainingRoutingModule } from './magazine-routing.module';
import { TrainingViewComponent } from './training-view/training-view.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TrainingGunsComponent } from './training-guns/training-guns.component';
import { TrainingGeneralComponent } from './training-general/training-general.component';
import { TrainingParticipantsComponent } from './training-participants/training-participants.component';
import { CalendarModule } from 'primeng/calendar';
import { TrainingBaseComponent } from './training-base/training-base.component';

@NgModule({
    declarations: [
        TrainingOutletComponent,
        TrainingsListComponent,
        TrainingViewComponent,
        TrainingGunsComponent,
        TrainingGeneralComponent,
        TrainingParticipantsComponent,
        TrainingBaseComponent,
    ],
    imports: [
        CommonModule,
        ToolbarModule,
        DialogModule,
        ButtonModule,
        TableModule,
        FormsModule,
        InputTextModule,
        TrainingRoutingModule,
        TabMenuModule,
        CalendarModule
    ],
    providers: [TrainingService],
})
export class TrainingModule {}
