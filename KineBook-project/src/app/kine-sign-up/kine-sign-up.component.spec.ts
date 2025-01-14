import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KineSignUpComponent } from './kine-sign-up.component';

describe('KineSignUpComponent', () => {
  let component: KineSignUpComponent;
  let fixture: ComponentFixture<KineSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KineSignUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KineSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
