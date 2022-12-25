import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/shared/models/training';
import { TrainingService } from '../services/traning.service';

@Component({
    selector: 'app-trainings-list',
    templateUrl: './trainings-list.component.html',
    styleUrls: ['./trainings-list.component.scss'],
})
export class TrainingsListComponent implements OnInit {
    trainingsList!: Training[];

    trainingDialog: boolean = false;

    training: Training = {};
    columns = [
        {
            field: 'name',
            header: 'Nazwa',
            style: { width: '200px' },
            dataType: 'text',
        },
        {
            field: 'date',
            header: 'Data',
            dataType: 'date',
        },
        {
            field: 'maintanance',
            header: '',
            dataType: 'maintanance',
        },
    ];
    constructor(private trainingService: TrainingService) {}

    ngOnInit(): void {
        this.getTrainings();
    }

    getTrainings() {
        this.trainingService.getTrainings().subscribe((res: Training[]) => {
            this.trainingsList = res;
        });
    }

    openNew() {
        this.training = {};
        this.trainingDialog = true;
    }

    saveTraining() {
        if (this.training._id === undefined) {
            this.trainingService
                .postTraining(this.training)
                .subscribe((res: Training) => {
                    console.log(res);
                    this.getTrainings();
                    this.hideDialog();
                });
            return;
        }
        this.trainingService
            .patchTraining(this.training)
            .subscribe((res: Training) => {
                console.log(res);
                this.getTrainings();
                this.hideDialog();
            });
    }

    hideDialog() {
        this.trainingDialog = false;
    }

    editTraining(training: Training) {
        this.training = { ...training };
        this.trainingDialog = true;
    }
}
