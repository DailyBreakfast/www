import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboPageComponent } from './abo-page/abo-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { EinstellungenPageComponent } from './einstellungen-page/einstellungen-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: 'einstellungen', component: EinstellungenPageComponent},
  // {path: 'abo', component: AboPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
