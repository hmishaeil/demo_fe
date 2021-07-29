import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksModalComponent } from './how-it-works-modal.component';

describe('HowItWorksModalComponent', () => {
  let component: HowItWorksModalComponent;
  let fixture: ComponentFixture<HowItWorksModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowItWorksModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
