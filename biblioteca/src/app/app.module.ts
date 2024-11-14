import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; //asi se indica que hay elemntos personalizados
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { EdicionBibliotecaComponent } from './components/edicion-biblioteca/edicion-biblioteca.component';
import { EditorComponent } from './components/editor/editor.component';
import { LibraryService } from './components/library.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarBibliotecasComponent } from './components/listar-bibliotecas/listar-bibliotecas.component';
import { ListadoLibrosComponent } from './components/listado-libros/listado-libros.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { EdicionLibrosComponent } from './components/edicion-libros/edicion-libros.component';
import { AdministradorBibliotecaComponent } from './components/administrador-biblioteca/administrador-biblioteca.component';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { GeolocalizacionComponent } from './components/geolocalizacion/geolocalizacion.component';
import { IonicModule } from '@ionic/angular';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { AudiolibrosComponent } from './components/audiolibros/audiolibros.component';
import { MercadolibreComponent } from './components/mercadolibre/mercadolibre.component';
import { TwitchComponent } from './components/twitch/twitch.component';
import { MercadolibreService } from './components/mercadolibre.service';
import { PagoComponent } from './components/pago/pago.component';
import { AuthorListComponent } from './components/author-list/author-list.component';


@NgModule({ declarations: [
        AppComponent,
        NavigationComponent,
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
        LibraryComponent,
        EdicionBibliotecaComponent,
        EditorComponent,
        ListarBibliotecasComponent,
        ListadoLibrosComponent,
        CrearLibroComponent,
        EdicionLibrosComponent,
        AdministradorBibliotecaComponent,
        ListadoUsuariosComponent,
        GeolocalizacionComponent,
        RedesSocialesComponent,
        AudiolibrosComponent,
        MercadolibreComponent,
        TwitchComponent,
        PagoComponent,
        AuthorListComponent
        
    ],

    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent], 
    imports: [
        BrowserModule,
        RouterModule.forRoot([]),
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule.forRoot(),
        HttpClientModule
    ], 
    providers: [
        LibraryService,
        MercadolibreService,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }