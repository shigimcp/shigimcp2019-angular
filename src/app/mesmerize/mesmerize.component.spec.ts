import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesmerizeComponent } from './mesmerize.component';

describe('MesmerizeComponent', () => {
  let component: MesmerizeComponent;
  let fixture: ComponentFixture<MesmerizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesmerizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesmerizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
