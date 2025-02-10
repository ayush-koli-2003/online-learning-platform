import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSessionManagementComponent } from './user-session-management.component';

describe('UserSessionManagementComponent', () => {
  let component: UserSessionManagementComponent;
  let fixture: ComponentFixture<UserSessionManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSessionManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSessionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
