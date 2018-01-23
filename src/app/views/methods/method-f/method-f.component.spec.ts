import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodFComponent } from './method-f.component';

describe('MethodFComponent', () => {
  let component: MethodFComponent;
  let fixture: ComponentFixture<MethodFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
