import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptereventschComponent } from './chaptereventsch.component';

describe('ChaptereventschComponent', () => {
  let component: ChaptereventschComponent;
  let fixture: ComponentFixture<ChaptereventschComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaptereventschComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptereventschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
