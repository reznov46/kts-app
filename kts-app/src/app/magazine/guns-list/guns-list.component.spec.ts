import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunsListComponent } from './guns-list.component';

describe('GunsListComponent', () => {
  let component: GunsListComponent;
  let fixture: ComponentFixture<GunsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GunsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GunsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
