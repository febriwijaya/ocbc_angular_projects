import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session27Component } from './session27.component';

describe('Session27Component', () => {
  let component: Session27Component;
  let fixture: ComponentFixture<Session27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
