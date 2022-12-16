import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrReviewsPageComponent } from './qr-reviews-page.component';

describe('QrReviewsPageComponent', () => {
  let component: QrReviewsPageComponent;
  let fixture: ComponentFixture<QrReviewsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrReviewsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrReviewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
