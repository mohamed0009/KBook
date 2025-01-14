import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarKineComponent } from './sidebar-kine.component';

describe('SidebarKineComponent', () => {
  let component: SidebarKineComponent;
  let fixture: ComponentFixture<SidebarKineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarKineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarKineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
