import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuvenilComponent } from './juvenil.component';

describe('JuvenilComponent', () => {
  let component: JuvenilComponent;
  let fixture: ComponentFixture<JuvenilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuvenilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuvenilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
