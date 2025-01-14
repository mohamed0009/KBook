import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionKineComponent } from './inscription-kine.component';

describe('InscriptionKineComponent', () => {
  let component: InscriptionKineComponent;
  let fixture: ComponentFixture<InscriptionKineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionKineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscriptionKineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
