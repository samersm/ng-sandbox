import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodJComponent } from './method-j.component';

describe('MethodJComponent', () => {
  let component: MethodJComponent;
  let fixture: ComponentFixture<MethodJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
