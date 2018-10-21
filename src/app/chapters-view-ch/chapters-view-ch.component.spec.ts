import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersViewChComponent } from './chapters-view-ch.component';

describe('ChaptersViewChComponent', () => {
  let component: ChaptersViewChComponent;
  let fixture: ComponentFixture<ChaptersViewChComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaptersViewChComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersViewChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
