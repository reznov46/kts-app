import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Types } from 'mongoose';
import { Training } from 'src/app/shared/models/training';
import { TrainingService } from '../services/traning.service';

@Component({
    selector: 'app-training-base',
    templateUrl: './training-base.component.html',
    styleUrls: ['./training-base.component.scss'],
})
export class TrainingBaseComponent implements OnInit {
    id: Types.ObjectId;
    training?: Training;
    route: ActivatedRoute;
    trainingService: TrainingService;
    constructor(protected injector: Injector) {
        this.route = this.injector.get(ActivatedRoute);
        this.trainingService = this.injector.get(TrainingService);
        this.id = new Types.ObjectId(this.route.snapshot.paramMap.get('id')!);
        console.log(this.route.snapshot.paramMap.get('id'))
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
