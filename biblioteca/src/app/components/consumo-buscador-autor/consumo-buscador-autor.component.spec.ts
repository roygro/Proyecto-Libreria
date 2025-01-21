import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoBuscadorAutorComponent } from './consumo-buscador-autor.component';

describe('ConsumoBuscadorAutorComponent', () => {
  let component: ConsumoBuscadorAutorComponent;
  let fixture: ComponentFixture<ConsumoBuscadorAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsumoBuscadorAutorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumoBuscadorAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
