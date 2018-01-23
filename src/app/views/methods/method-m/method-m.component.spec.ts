import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodMComponent } from './method-m.component';

describe('MethodMComponent', () => {
  let component: MethodMComponent;
  let fixture: ComponentFixture<MethodMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
