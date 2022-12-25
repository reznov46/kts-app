import { Injectable, Injector } from '@angular/core';
import { Types } from 'mongoose';
import { Observable } from 'rxjs';
import { CoreDataService } from 'src/app/core/services/core-data.service';
import { Gun } from 'src/app/shared/models/gun';
import { Participant } from 'src/app/shared/models/participant';
import { Training } from 'src/app/shared/models/training';

@Injectable()
export class TrainingService extends CoreDataService {
    constructor(protected override injector: Injector) {
        super(injector);
        this.baseUrl = `${this.appConfig.getBaseUrl()}/trainings`;
    }

    getTrainings(): Observable<Training[]> {
        return this.apiServices.get(`${this.baseUrl}`);
    }
    getTraining(id: Types.ObjectId): Observable<Training> {
        const url: string = `${this.baseUrl}/${id}`;
        return this.apiServices.get(url);
    }
    getTrainingData(id: Types.ObjectId): Observable<Training> {
        const url: string = `${this.baseUrl}/${id}/true`;
        return this.apiServices.get(url);
    }
    patchTraining(training: Training): Observable<Training> {
        const url: string = `${this.baseUrl}/${training._id}`;
        return this.apiServices.patch(url, training);
    }

    postTraining(training: Training): Observable<Training> {
        const url: string = `${this.baseUrl}`;
        return this.apiServices.post(url, training);
    }

    addGuns(training: Training, gunsToAdd: Gun[]): Observable<Training> {
        const url: string = `${this.baseUrl}/addGuns/${training._id}`;
        return this.apiServices.patch(url, gunsToAdd);
    }
    addParticipants(
        training: Training,
        participantsToAdd: Participant[]
    ): Observable<Training> {
        const url: string = `${this.baseUrl}/addParticipants/${training._id}`;
        return this.apiServices.patch(url, participantsToAdd);
    }
}
