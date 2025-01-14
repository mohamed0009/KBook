import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilKineComponent } from './edit-profil-kine.component';

describe('EditProfilKineComponent', () => {
  let component: EditProfilKineComponent;
  let fixture: ComponentFixture<EditProfilKineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProfilKineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProfilKineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
