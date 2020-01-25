import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuShowReportComponent } from './stu-show-report.component';

describe('StuShowReportComponent', () => {
  let component: StuShowReportComponent;
  let fixture: ComponentFixture<StuShowReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuShowReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuShowReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
