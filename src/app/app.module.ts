import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentLadoEsquerdoComponent } from './component-lado-esquerdo/component-lado-esquerdo.component';
import { ComponentSobreComponent } from './component-sobre/component-sobre.component';
import { ComponentEsperienciaComponent } from './component-experiencia/component-esperiencia.component';
import { ComponentEducacaoComponent } from './component-educacao/component-educacao.component';
import { ComponentAbilidadesComponent } from './component-abilidades/component-abilidades.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentLadoEsquerdoComponent,
    ComponentSobreComponent,
    ComponentEsperienciaComponent,
    ComponentEducacaoComponent,
    ComponentAbilidadesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
