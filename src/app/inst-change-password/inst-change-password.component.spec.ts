import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstChangePasswordComponent } from './inst-change-password.component';

describe('InstChangePasswordComponent', () => {
  let component: InstChangePasswordComponent;
  let fixture: ComponentFixture<InstChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
