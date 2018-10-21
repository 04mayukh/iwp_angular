import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterProfileComponent } from './chapter-profile.component';

describe('ChapterProfileComponent', () => {
  let component: ChapterProfileComponent;
  let fixture: ComponentFixture<ChapterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
