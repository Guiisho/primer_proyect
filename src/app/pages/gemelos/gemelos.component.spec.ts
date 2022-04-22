import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemelosComponent } from './gemelos.component';

describe('GemelosComponent', () => {
  let component: GemelosComponent;
  let fixture: ComponentFixture<GemelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GemelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GemelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
