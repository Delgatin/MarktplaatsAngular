import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {StartpaginaComponent} from './paginas/startpagina/startpagina.component';
import {LoginpaginaComponent} from './paginas/loginpagina/loginpagina.component';
import {RegistreerpaginaComponent} from './paginas/registreerpagina/registreerpagina.component';
import {AanbiedenpaginaComponent} from './paginas/aanbiedenpagina/aanbiedenpagina.component';
import {ZoekpaginaComponent} from './paginas/zoekpagina/zoekpagina.component';

const routes: Routes = [
  {path: 'start', component: StartpaginaComponent},
  {path: 'login', component: LoginpaginaComponent},
  {path: 'registreer', component: RegistreerpaginaComponent},
  {path: 'aanbieden', component: AanbiedenpaginaComponent},
  {path: 'zoek', component: ZoekpaginaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
