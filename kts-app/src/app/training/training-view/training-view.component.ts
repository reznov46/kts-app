import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Types } from 'mongoose';
import { MenuItem } from 'primeng/api';
import { Training } from 'src/app/shared/models/training';
import { TrainingService } from '../services/traning.service';

@Component({
    selector: 'app-training-view',
    templateUrl: './training-view.component.html',
    styleUrls: ['./training-view.component.scss'],
})
export class TrainingViewComponent implements OnInit {
    trainingCards: MenuItem[] = [
        { label: 'Ogólne', routerLink: 'general' },
        { label: 'Broń', routerLink: 'guns' },
        { label: 'Uczestnicy', routerLink: 'participants' },
    ];
    constructor() {}

    ngOnInit(): void {}
}
