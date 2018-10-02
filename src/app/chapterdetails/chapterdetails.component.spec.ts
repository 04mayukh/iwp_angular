import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterdetailsComponent } from './chapterdetails.component';

describe('ChapterdetailsComponent', () => {
  let component: ChapterdetailsComponent;
  let fixture: ComponentFixture<ChapterdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
