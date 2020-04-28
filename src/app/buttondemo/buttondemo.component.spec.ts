import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtondemoComponent } from './buttondemo.component';

describe('ButtondemoComponent', () => {
  let component: ButtondemoComponent;
  let fixture: ComponentFixture<ButtondemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtondemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtondemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
