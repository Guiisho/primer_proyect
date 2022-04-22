import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadricepsComponent } from './cuadriceps.component';

describe('CuadricepsComponent', () => {
  let component: CuadricepsComponent;
  let fixture: ComponentFixture<CuadricepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadricepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadricepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
