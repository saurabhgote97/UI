import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuEditProfileComponent } from './stu-edit-profile.component';

describe('StuEditProfileComponent', () => {
  let component: StuEditProfileComponent;
  let fixture: ComponentFixture<StuEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
