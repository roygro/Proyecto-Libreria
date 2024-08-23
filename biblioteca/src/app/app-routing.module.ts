import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryDetailComponent } from './components/library-detail/library-detail.component';
import { HomeComponent } from './components/home/home.component';
import { JuniorComponent } from './components/junior/junior.component';
import { JuvenilComponent } from './components/juvenil/juvenil.component';
import { PackageComponent } from './components/package/package.component';
import { CienciaFComponent } from './components/ciencia-f/ciencia-f.component';
import { FantasiaComponent } from './components/fantasia/fantasia.component';
import { RomanceComponent } from './components/romance/romance.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LibraryComponent } from './components/library/library.component';
import { EdicionBibliotecaComponent } from './components/edicion-biblioteca/edicion-biblioteca.component';
import { EditorComponent } from './components/editor/editor.component';
import { ListarBibliotecasComponent } from './components/listar-bibliotecas/listar-bibliotecas.component';
import { ListadoLibrosComponent } from './components/listado-libros/listado-libros.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { EdicionLibrosComponent } from './components/edicion-libros/edicion-libros.component';
import { AdministradorBibliotecaComponent } from './components/administrador-biblioteca/administrador-biblioteca.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'library-detail/:id',
    component: LibraryDetailComponent
  },
  {
    path: 'junior',
    component: JuniorComponent
  },
  {
    path: 'juvenil',
    component: JuvenilComponent
  },
  {
    path: 'pack',
    component: PackageComponent
  },
  {
    path: 'inicioSesion',
    component: InicioSesionComponent
  },
  {
    path: 'detalle',
    component: LibraryDetailComponent
  },
  {
    path: 'ciencia',
    component: CienciaFComponent
  },
  {
    path: 'fantasia',
    component: FantasiaComponent
  },
  {
    path: 'romance',
    component: RomanceComponent
  },
  {
    path: 'juegos',
    component: JuegosComponent
  },
  { 
    path: 'libraries', 
    component: LibraryComponent 
  },
  { 
    path: 'library/:id', 
    component: LibraryDetailComponent 
  }, // Detalle de biblioteca
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'edicionBiblioteca/:libraryId',
    component: EdicionBibliotecaComponent
  },
  {
    path: 'superAdmin',
    component: EditorComponent
  },
  {
    path: 'crearLibro',
    component: CrearLibroComponent
  },
  { path: 'listarBibliotecas', 
    component: ListarBibliotecasComponent
  },
  { path: 'listarLibros', 
    component: ListadoLibrosComponent
  },
  { path: 'editarLibro/:id', 
    component: EdicionLibrosComponent
  },
  { path: 'administradorBiblioteca', 
    component: AdministradorBibliotecaComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
