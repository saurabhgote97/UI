import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstEditProfileComponent } from './inst-edit-profile.component';

describe('InstEditProfileComponent', () => {
  let component: InstEditProfileComponent;
  let fixture: ComponentFixture<InstEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
