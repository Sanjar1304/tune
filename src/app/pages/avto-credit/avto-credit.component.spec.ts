import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvtoCreditComponent } from './avto-credit.component';

describe('AvtoCreditComponent', () => {
  let component: AvtoCreditComponent;
  let fixture: ComponentFixture<AvtoCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvtoCreditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvtoCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
