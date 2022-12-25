import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingBaseComponent } from './training-base.component';

describe('TrainingBaseComponent', () => {
  let component: TrainingBaseComponent;
  let fixture: ComponentFixture<TrainingBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
