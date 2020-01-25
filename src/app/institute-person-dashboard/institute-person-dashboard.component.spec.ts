import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutePersonDashboardComponent } from './institute-person-dashboard.component';

describe('InstitutePersonDashboardComponent', () => {
  let component: InstitutePersonDashboardComponent;
  let fixture: ComponentFixture<InstitutePersonDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutePersonDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutePersonDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
