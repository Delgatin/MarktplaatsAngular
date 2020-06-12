import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StartpaginaComponent} from './paginas/startpagina/startpagina.component';
import {ZoekpaginaComponent} from './paginas/zoekpagina/zoekpagina.component';
import {LoginpaginaComponent} from './paginas/loginpagina/loginpagina.component';
import {RegistreerpaginaComponent} from './paginas/registreerpagina/registreerpagina.component';
import {AanbiedenpaginaComponent} from './paginas/aanbiedenpagina/aanbiedenpagina.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SameEmailDirective } from './paginas/registreerpagina/validators/not-same-email.directive';
import { NotSameWachtwoordDirective } from './paginas/registreerpagina/validators/not-same-wachtwoord.directive';



@NgModule({
  declarations: [
    AppComponent,
    StartpaginaComponent,
    ZoekpaginaComponent,
    LoginpaginaComponent,
    RegistreerpaginaComponent,
    AanbiedenpaginaComponent,
    SameEmailDirective,
    NotSameWachtwoordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
