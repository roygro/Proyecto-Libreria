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
import { PayComponent } from './components/pay/pay.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';

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
    path: 'pago',
    component: PayComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
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
