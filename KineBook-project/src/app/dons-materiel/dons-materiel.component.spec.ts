import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonsMaterielComponent } from './dons-materiel.component';

describe('DonsMaterielComponent', () => {
  let component: DonsMaterielComponent;
  let fixture: ComponentFixture<DonsMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonsMaterielComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonsMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
