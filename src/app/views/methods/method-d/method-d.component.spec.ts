import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodDComponent } from './method-d.component';

describe('MethodDComponent', () => {
  let component: MethodDComponent;
  let fixture: ComponentFixture<MethodDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
