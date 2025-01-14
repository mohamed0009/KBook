import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesReservationPageComponent } from './mes-reservation-page.component';

describe('MesReservationPageComponent', () => {
  let component: MesReservationPageComponent;
  let fixture: ComponentFixture<MesReservationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesReservationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesReservationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
