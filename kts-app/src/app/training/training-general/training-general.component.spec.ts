import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingGeneralComponent } from './training-general.component';

describe('TrainingGeneralComponent', () => {
  let component: TrainingGeneralComponent;
  let fixture: ComponentFixture<TrainingGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
