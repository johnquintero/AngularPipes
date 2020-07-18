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

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
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
