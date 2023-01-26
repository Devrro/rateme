import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectPagesComponent } from './redirect-pages.component';

describe('RedirectPagesComponent', () => {
  let component: RedirectPagesComponent;
  let fixture: ComponentFixture<RedirectPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
