import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodAComponent } from './method-a.component';

describe('MethodAComponent', () => {
  let component: MethodAComponent;
  let fixture: ComponentFixture<MethodAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
