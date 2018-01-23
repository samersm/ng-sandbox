import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodBComponent } from './method-b.component';

describe('MethodBComponent', () => {
  let component: MethodBComponent;
  let fixture: ComponentFixture<MethodBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
