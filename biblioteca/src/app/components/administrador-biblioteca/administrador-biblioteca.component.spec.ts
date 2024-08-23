import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorBibliotecaComponent } from './administrador-biblioteca.component';

describe('AdministradorBibliotecaComponent', () => {
  let component: AdministradorBibliotecaComponent;
  let fixture: ComponentFixture<AdministradorBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministradorBibliotecaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
