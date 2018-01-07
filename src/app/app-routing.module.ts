import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { OfertasComponent } from './components/pages/ofertas/ofertas.component';
import { ExtraComponent } from './components/pages/extra/extra.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ofertas',
    component: OfertasComponent,
  },
  {
    path: 'extra',
    component: ExtraComponent,
  }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}