import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuTestHistoryComponent } from './stu-test-history.component';

describe('StuTestHistoryComponent', () => {
  let component: StuTestHistoryComponent;
  let fixture: ComponentFixture<StuTestHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuTestHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuTestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
