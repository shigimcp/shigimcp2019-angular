import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShigeruComponent } from './shigeru.component';

describe('ShigeruComponent', () => {
  let component: ShigeruComponent;
  let fixture: ComponentFixture<ShigeruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShigeruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShigeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
