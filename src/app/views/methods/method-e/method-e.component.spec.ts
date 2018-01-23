import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodEComponent } from './method-e.component';

describe('MethodEComponent', () => {
  let component: MethodEComponent;
  let fixture: ComponentFixture<MethodEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
