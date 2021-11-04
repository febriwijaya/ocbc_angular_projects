import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDataBindingComponent } from './angular-data-binding.component';

describe('AngularDataBindingComponent', () => {
  let component: AngularDataBindingComponent;
  let fixture: ComponentFixture<AngularDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
