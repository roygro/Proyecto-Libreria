import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBibliotecasComponent } from './listar-bibliotecas.component';

describe('ListarBibliotecasComponent', () => {
  let component: ListarBibliotecasComponent;
  let fixture: ComponentFixture<ListarBibliotecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarBibliotecasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarBibliotecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
