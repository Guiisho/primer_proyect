import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsquiotibialesComponent } from './isquiotibiales.component';

describe('IsquiotibialesComponent', () => {
  let component: IsquiotibialesComponent;
  let fixture: ComponentFixture<IsquiotibialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsquiotibialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsquiotibialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
