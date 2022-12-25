import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingGunsComponent } from './training-guns.component';

describe('TrainingGunsComponent', () => {
  let component: TrainingGunsComponent;
  let fixture: ComponentFixture<TrainingGunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingGunsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingGunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
