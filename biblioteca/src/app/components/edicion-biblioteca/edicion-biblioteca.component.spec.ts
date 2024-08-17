import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionBibliotecaComponent } from './edicion-biblioteca.component';

describe('EdicionBibliotecaComponent', () => {
  let component: EdicionBibliotecaComponent;
  let fixture: ComponentFixture<EdicionBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdicionBibliotecaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
