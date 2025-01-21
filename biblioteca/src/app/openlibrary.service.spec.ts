import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OpenLibraryService } from './openlibrary.service';  // Asegúrate de que la ruta es correcta



describe('OpenLibraryService', () => {
  let service: OpenLibraryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa el módulo necesario para simular peticiones HTTP
      providers: [OpenLibraryService]    // Proporciona el servicio que vas a probar
    });
    service = TestBed.inject(OpenLibraryService);  // Inyecta el servicio
    httpMock = TestBed.inject(HttpTestingController);  // Inyecta el controlador HTTP para las pruebas
  });

  it('should be created', () => {
    expect(service).toBeTruthy();  // Verifica que el servicio se haya creado correctamente
  });

  // Aquí puedes agregar más pruebas si lo necesitas

  afterEach(() => {
    httpMock.verify();  // Verifica que no haya solicitudes HTTP pendientes
  });
});
