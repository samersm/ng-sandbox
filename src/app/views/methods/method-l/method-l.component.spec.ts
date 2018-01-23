import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodLComponent } from './method-l.component';

describe('MethodLComponent', () => {
  let component: MethodLComponent;
  let fixture: ComponentFixture<MethodLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
