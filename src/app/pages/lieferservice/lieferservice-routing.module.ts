import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtikelPageComponent } from './artikel-page/artikel-page.component';
import { BestellenPageComponent } from './bestellen-page/bestellen-page.component';
import { DienstleisterPageComponent } from './dienstleister-page/dienstleister-page.component';

const routes: Routes = [
  {path: '', component: DienstleisterPageComponent},
  {path: 'artikel', component: ArtikelPageComponent},
  {path: 'bezahlen', component: BestellenPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LieferserviceRoutingModule { }
