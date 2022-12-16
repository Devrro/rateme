import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewQrFormComponent } from './review-qr-form.component';

describe('ReviewQrFormComponent', () => {
  let component: ReviewQrFormComponent;
  let fixture: ComponentFixture<ReviewQrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewQrFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewQrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
