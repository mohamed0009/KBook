import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreKineComponent } from './offre-kine.component';

describe('OffreKineComponent', () => {
  let component: OffreKineComponent;
  let fixture: ComponentFixture<OffreKineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffreKineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffreKineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
