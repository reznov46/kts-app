import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOutletComponent } from './training-outlet.component';

describe('TrainingOutletComponent', () => {
  let component: TrainingOutletComponent;
  let fixture: ComponentFixture<TrainingOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingOutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
