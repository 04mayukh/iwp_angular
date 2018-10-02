import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterEventsComponent } from './chapter-events.component';

describe('ChapterEventsComponent', () => {
  let component: ChapterEventsComponent;
  let fixture: ComponentFixture<ChapterEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
