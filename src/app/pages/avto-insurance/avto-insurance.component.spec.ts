import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvtoInsuranceComponent } from './avto-insurance.component';

describe('AvtoInsuranceComponent', () => {
  let component: AvtoInsuranceComponent;
  let fixture: ComponentFixture<AvtoInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvtoInsuranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvtoInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
