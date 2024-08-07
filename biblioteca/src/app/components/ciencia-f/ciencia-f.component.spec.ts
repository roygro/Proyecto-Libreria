import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CienciaFComponent } from './ciencia-f.component';

describe('CienciaFComponent', () => {
  let component: CienciaFComponent;
  let fixture: ComponentFixture<CienciaFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CienciaFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CienciaFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
