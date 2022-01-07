import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { EinstellungenPageComponent } from './einstellungen-page/einstellungen-page.component';
import { AboPageComponent } from './abo-page/abo-page.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginPageComponent,
    DashboardPageComponent,
    EinstellungenPageComponent,
    AboPageComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatButtonModule,
        MatGridListModule,
        MatIconModule,
        MatSelectModule,
        MatListModule,
        MatCardModule,
        MatChipsModule,
        MatInputModule,
        MatRadioModule,
        MatStepperModule,
        NgxChartsModule,
        FlexLayoutModule,
    ]
})
export class LoginModule { }
