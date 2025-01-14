import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionKineComponent } from './session-kine.component';

describe('SessionKineComponent', () => {
  let component: SessionKineComponent;
  let fixture: ComponentFixture<SessionKineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionKineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessionKineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
