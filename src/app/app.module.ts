import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';

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
import { PrijsPipe } from './pipes/prijs.pipe';
import { registerLocaleData } from '@angular/common';
import localeNL from '@angular/common/locales/nl';

registerLocaleData(localeNL, 'nl');
@NgModule({
  declarations: [
    AppComponent,
    StartpaginaComponent,
    ZoekpaginaComponent,
    LoginpaginaComponent,
    RegistreerpaginaComponent,
    AanbiedenpaginaComponent,
    PrijsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'nl'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
