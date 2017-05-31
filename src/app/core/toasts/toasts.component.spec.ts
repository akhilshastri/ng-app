import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastsComponent } from './toasts.component';

describe('ToastsComponent', () => {
  let component: ToastsComponent;
  let fixture: ComponentFixture<ToastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
