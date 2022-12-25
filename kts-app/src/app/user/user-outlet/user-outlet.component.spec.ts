import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOutletComponent } from './user-outlet.component';

describe('UserOutletComponent', () => {
  let component: UserOutletComponent;
  let fixture: ComponentFixture<UserOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
