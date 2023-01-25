import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileActivatedComponent } from './profile-activated.component';

describe('ProfileActivatedComponent', () => {
  let component: ProfileActivatedComponent;
  let fixture: ComponentFixture<ProfileActivatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileActivatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileActivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
