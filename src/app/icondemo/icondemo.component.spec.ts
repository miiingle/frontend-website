import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcondemoComponent } from './icondemo.component';

describe('IcondemoComponent', () => {
  let component: IcondemoComponent;
  let fixture: ComponentFixture<IcondemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcondemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcondemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
