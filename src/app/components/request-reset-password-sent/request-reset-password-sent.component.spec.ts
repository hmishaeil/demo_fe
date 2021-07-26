import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestResetPasswordSentComponent } from './request-reset-password-sent.component';

describe('RequestResetPasswordSentComponent', () => {
  let component: RequestResetPasswordSentComponent;
  let fixture: ComponentFixture<RequestResetPasswordSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestResetPasswordSentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestResetPasswordSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
