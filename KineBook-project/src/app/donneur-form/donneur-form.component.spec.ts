import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneurFormComponent } from './donneur-form.component';

describe('DonneurFormComponent', () => {
  let component: DonneurFormComponent;
  let fixture: ComponentFixture<DonneurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonneurFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonneurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
