import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Types } from 'mongoose';
import { Gun } from 'src/app/shared/models/gun';
import { GunService } from '../services/gun.service';

@Component({
    selector: 'app-gun-view',
    templateUrl: './gun-view.component.html',
    styleUrls: ['./gun-view.component.scss'],
})
export class GunViewComponent implements OnInit {
    mode: string | null;
    isEditMode: boolean = false;
    id: Types.ObjectId | null = null;

    gun?: Gun;
    constructor(
        private route: ActivatedRoute,
        private gunService: GunService,
        private router: Router
    ) {
        this.mode = this.route.snapshot.paramMap.get('mode');
        const id: string = this.route.snapshot.paramMap.get('id')!;
        if (id !== null) {
            this.id = new Types.ObjectId(id);
        }
    }

    ngOnInit(): void {
        if (this.mode === 'add') {
            this.gun = new Gun();
        } else if (this.mode === 'edit' && this.id) {
            this.getGun(this.id);
        }
    }

    getGun(id: Types.ObjectId) {
        this.gunService.getGun(id).subscribe((res: Gun) => {
            this.gun = new Gun().deserialize(res);
        });
    }

    onSubmit() {
        if (this.id === null) {
            this.saveNewGun();
            return;
        }
        this.gunService.patchGun(this.gun!).subscribe((res: Gun) => {
            console.log(res);
            this.router.navigate(['/magazine']);
        });
    }

    saveNewGun() {
        this.gunService.saveGun(this.gun!).subscribe((res: Gun) => {
            console.log(res);
            this.router.navigate(['/magazine']);
        });
    }
}
