import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodGComponent } from './method-g.component';

describe('MethodGComponent', () => {
  let component: MethodGComponent;
  let fixture: ComponentFixture<MethodGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
