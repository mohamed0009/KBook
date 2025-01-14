import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsOffreComponent } from './stats-offre.component';

describe('StatsOffreComponent', () => {
  let component: StatsOffreComponent;
  let fixture: ComponentFixture<StatsOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsOffreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
