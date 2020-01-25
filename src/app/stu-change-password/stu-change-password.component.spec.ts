import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuChangePasswordComponent } from './stu-change-password.component';

describe('StuChangePasswordComponent', () => {
  let component: StuChangePasswordComponent;
  let fixture: ComponentFixture<StuChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
