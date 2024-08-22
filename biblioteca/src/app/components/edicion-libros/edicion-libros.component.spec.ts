import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionLibrosComponent } from './edicion-libros.component';

describe('EdicionLibrosComponent', () => {
  let component: EdicionLibrosComponent;
  let fixture: ComponentFixture<EdicionLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdicionLibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
