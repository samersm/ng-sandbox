import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodCComponent } from './method-c.component';

describe('MethodCComponent', () => {
  let component: MethodCComponent;
  let fixture: ComponentFixture<MethodCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
