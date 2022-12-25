import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoListComponent } from './ammo-list.component';

describe('AmmoListComponent', () => {
  let component: AmmoListComponent;
  let fixture: ComponentFixture<AmmoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmmoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmmoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
