import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterAttendanceComponent } from './chapter-attendance.component';

describe('ChapterAttendanceComponent', () => {
  let component: ChapterAttendanceComponent;
  let fixture: ComponentFixture<ChapterAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
