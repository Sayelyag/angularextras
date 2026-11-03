import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfComponent } from './pdf-component';

describe('PdfComponent', () => {
  let component: PdfComponent;
  let fixture: ComponentFixture<PdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PdfComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
