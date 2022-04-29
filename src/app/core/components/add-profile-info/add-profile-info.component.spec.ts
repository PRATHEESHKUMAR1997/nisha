import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfileInfoComponent } from './add-profile-info.component';

describe('AddProfileInfoComponent', () => {
  let component: AddProfileInfoComponent;
  let fixture: ComponentFixture<AddProfileInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfileInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
