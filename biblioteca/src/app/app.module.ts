import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; //asi se indica que hay elemntos personalizados
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LibraryFormComponent } from './components/library-form/library-form.component';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LibrarysService } from './services/library.service';
import { RouterModule } from '@angular/router';
import { LibraryDetailComponent } from './components/library-detail/library-detail.component';
import { HomeComponent } from './components/home/home.component';
import { JuniorComponent } from './components/junior/junior.component';
import { JuvenilComponent } from './components/juvenil/juvenil.component';
import { PackageComponent } from './components/package/package.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CienciaFComponent } from './components/ciencia-f/ciencia-f.component';
import { FantasiaComponent } from './components/fantasia/fantasia.component';
import { RomanceComponent } from './components/romance/romance.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LibraryComponent } from './components/library/library.component';




@NgModule({ declarations: [
        AppComponent,
        NavigationComponent,
        LibraryFormComponent,
        LibraryListComponent,
        LibraryDetailComponent,
        HomeComponent,
        JuniorComponent,
        JuvenilComponent,
        PackageComponent,
        InicioComponent,
        CienciaFComponent,
        FantasiaComponent,
        RomanceComponent,
        JuegosComponent,
        InicioSesionComponent,
        RegistroComponent,
        LibraryComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent], imports: [BrowserModule,
        RouterModule.forRoot([]),
        AppRoutingModule,
        FormsModule], providers: [
        LibrarysService
        /*GamesService*/
        ,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }