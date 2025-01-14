import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartesOffresComponent } from './cartes-offres.component';

describe('CartesOffresComponent', () => {
  let component: CartesOffresComponent;
  let fixture: ComponentFixture<CartesOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartesOffresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartesOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
