import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PectoralComponent } from './pectoral.component';

describe('PectoralComponent', () => {
  let component: PectoralComponent;
  let fixture: ComponentFixture<PectoralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PectoralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PectoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
