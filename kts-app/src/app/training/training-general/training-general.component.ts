import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Types } from 'mongoose';
import { Training } from 'src/app/shared/models/training';
import { TrainingService } from '../services/traning.service';

@Component({
    selector: 'app-training-general',
    templateUrl: './training-general.component.html',
    styleUrls: ['./training-general.component.scss'],
})
export class TrainingGeneralComponent implements OnInit {
    id: Types.ObjectId;
    training?: Training;
    constructor(
        private route: ActivatedRoute,
        private trainingService: TrainingService
    ) {
        this.id = new Types.ObjectId(this.route.snapshot.paramMap.get('id')!);
        console.log(this.id);
    }

    ngOnInit(): void {
        this.getTraining(this.id);
    }

    getTraining(id: Types.ObjectId) {
        this.trainingService.getTrainingData(id).subscribe((res: Training) => {
            this.training = res;
            console.log(this.training);
        });
    }
}
