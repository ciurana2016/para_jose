import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { OfertaComponent } from './components/modules/oferta/oferta.component';
import { MapaComponent } from './components/modules/mapa/mapa.component';
import { HabitacionesComponent } from './components/modules/habitaciones/habitaciones.component';

// Paginas
import { HomeComponent } from './components/pages/home/home.component';
import { OfertasComponent } from './components/pages/ofertas/ofertas.component';
import { ExtraComponent } from './components/pages/extra/extra.component';

// Routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OfertaComponent,
    MapaComponent,
    HabitacionesComponent,
    HomeComponent,
    OfertasComponent,
    ExtraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
