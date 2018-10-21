import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewChapterComponent } from './main-view-chapter.component';

describe('MainViewChapterComponent', () => {
  let component: MainViewChapterComponent;
  let fixture: ComponentFixture<MainViewChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainViewChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
