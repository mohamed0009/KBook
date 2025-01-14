import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KineDemandesComponent } from './kine-demandes.component';

describe('KineDemandesComponent', () => {
  let component: KineDemandesComponent;
  let fixture: ComponentFixture<KineDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KineDemandesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KineDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
