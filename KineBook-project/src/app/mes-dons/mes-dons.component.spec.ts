import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDonsComponent } from './mes-dons.component';

describe('MesDonsComponent', () => {
  let component: MesDonsComponent;
  let fixture: ComponentFixture<MesDonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesDonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesDonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
