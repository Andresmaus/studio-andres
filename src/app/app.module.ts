import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContenidoComponent } from './contenido/contenido.component';
import { Contenido2Component } from './contenido2/contenido2.component';

@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    ContenidoComponent,
    Contenido2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
