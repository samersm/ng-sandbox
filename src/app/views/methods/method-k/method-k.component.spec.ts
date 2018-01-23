import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodKComponent } from './method-k.component';

describe('MethodKComponent', () => {
  let component: MethodKComponent;
  let fixture: ComponentFixture<MethodKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
