import { Component, OnInit } from '@angular/core';
import { Gun } from 'src/app/shared/models/gun';
import { GunService } from '../services/gun.service';

@Component({
    selector: 'app-guns-list',
    templateUrl: './guns-list.component.html',
    styleUrls: ['./guns-list.component.scss'],
})
export class GunsListComponent implements OnInit {
    gunsList!: Gun[];
    
    columns = [
        {
            field: 'name',
            header: 'Nazwa',
            style: { width: '200px' },
            dataType: 'text',
        },
        {
            field: 'createdAt',
            header: 'Utworzony',
            dataType: 'date',
        },
        {
            field: 'maintanance',
            header: '',
            dataType: 'maintanance',
        },
    ];
    constructor(private gunService: GunService) {}


    ngOnInit(): void {
        this.getGuns();
    }
    getGuns() {
        this.gunService.getGuns().subscribe((res: any) => {
            this.gunsList = res;
        });
    }
}
