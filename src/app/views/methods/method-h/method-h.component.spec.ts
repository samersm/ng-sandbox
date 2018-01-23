import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodHComponent } from './method-h.component';

describe('MethodHComponent', () => {
  let component: MethodHComponent;
  let fixture: ComponentFixture<MethodHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
