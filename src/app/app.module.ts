import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from "@angular/common";

//idiomas que podra manejar
import  localeCo  from "@angular/common/locales/es";
import  localeFr  from "@angular/common/locales/fr";

registerLocaleData(localeCo);
registerLocaleData(localeFr);


import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { PipeseguroPipe } from './pipes/pipeseguro.pipe';
import { OcultarcadenaPipe } from './pipes/ocultarcadena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    PipeseguroPipe,
    OcultarcadenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue:'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
