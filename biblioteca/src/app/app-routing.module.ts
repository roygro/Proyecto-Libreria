import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { LibraryFormComponent } from './components/library-form/library-form.component';
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
    path: 'library',
    component: LibraryListComponent
  },
  {
    path: 'library/add',
    component: LibraryFormComponent
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
    path: 'administrador',
    component: EditorComponent
  },
 /* {
    path: 'edicionLibro',
    component: EdicionLibrosComponent
  },*/
  { path: 'listarBibliotecas', 
    component: ListarBibliotecasComponent
  },
  { path: 'listarLibros', 
    component: LibraryListComponent
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
