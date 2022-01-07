import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';
import { HomeComponent } from './pages/home/home.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { LieferdienstWerdenComponent } from './pages/lieferdienst-werden/lieferdienst-werden.component';

const routes: Routes = [
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'lieferdienst-werden', component: LieferdienstWerdenComponent },
  { path: 'lieferservice', loadChildren: () => import('./pages/lieferservice/lieferservice.module').then(m => m.LieferserviceModule)},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  { path: 'kontakt', component: ContactPageComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
