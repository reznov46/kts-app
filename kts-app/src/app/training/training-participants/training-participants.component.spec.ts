import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingParticipantsComponent } from './training-participants.component';

describe('TrainingParticipantsComponent', () => {
  let component: TrainingParticipantsComponent;
  let fixture: ComponentFixture<TrainingParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingParticipantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
