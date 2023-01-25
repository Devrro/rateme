import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramInfoComponent } from './telegram-info.component';

describe('TelegramInfoComponent', () => {
  let component: TelegramInfoComponent;
  let fixture: ComponentFixture<TelegramInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelegramInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelegramInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
