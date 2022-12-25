import { Component, OnInit } from '@angular/core';
import { Ammo } from 'src/app/shared/models/ammo';
import { AmmoService } from '../services/ammo.service';

@Component({
    selector: 'app-ammo-list',
    templateUrl: './ammo-list.component.html',
    styleUrls: ['./ammo-list.component.scss'],
})
export class AmmoListComponent implements OnInit {
    ammoList!: Ammo[];
    ammoDialog: boolean = false;

    ammo: Ammo = {};
    columns = [
        {
            field: 'caliber',
            header: 'Kaliber',
            style: { width: '200px' },
            dataType: 'text',
        },
        {
            field: 'amount',
            header: 'Ilość',
            dataType: 'number',
        },
        {
            field: 'maintanance',
            header: '',
            dataType: 'maintanance',
        },
    ];

    constructor(private ammoService: AmmoService) {}

    ngOnInit(): void {
        this.getAmmo();
    }

    getAmmo() {
        this.ammoService.getAmmos().subscribe((res: Ammo[]) => {
            this.ammoList = res;
        });
    }

    openNew() {
        this.ammo = {};
        this.ammoDialog = true;
    }

    hideDialog() {
        this.ammoDialog = false;
    }

    saveProduct() {
        if (this.ammo._id === undefined) {
            this.ammoService.postAmmo(this.ammo).subscribe((res: Ammo) => {
                console.log(res);
                this.getAmmo();
                this.hideDialog();
            });
            return;
        }
        this.ammoService.patchAmmo(this.ammo).subscribe((res: Ammo) => {
            console.log(res);
            this.getAmmo();
            this.hideDialog();
        });
    }

    editAmmo(ammo: Ammo) {
        console.log(ammo);
        this.ammo = { ...ammo };
        this.ammoDialog = true;
    }
}
