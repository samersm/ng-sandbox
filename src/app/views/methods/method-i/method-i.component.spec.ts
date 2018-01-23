import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodIComponent } from './method-i.component';

describe('MethodIComponent', () => {
  let component: MethodIComponent;
  let fixture: ComponentFixture<MethodIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
