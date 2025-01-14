import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionDonneurComponent } from './inscription-donneur.component';

describe('InscriptionDonneurComponent', () => {
  let component: InscriptionDonneurComponent;
  let fixture: ComponentFixture<InscriptionDonneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionDonneurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscriptionDonneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
