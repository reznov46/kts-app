import { Component, Injector, OnInit } from '@angular/core';
import { TrainingBaseComponent } from '../training-base/training-base.component';

@Component({
    selector: 'app-training-general',
    templateUrl: './training-general.component.html',
    styleUrls: ['./training-general.component.scss'],
})
export class TrainingGeneralComponent
    extends TrainingBaseComponent
    implements OnInit
{
    constructor(protected override injector: Injector) {
        super(injector);
    }

    override ngOnInit(): void {
        super.ngOnInit();
    }
}
