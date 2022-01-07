import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from '../../shared/shared.module';

import { LieferserviceRoutingModule } from './lieferservice-routing.module';
import { LieferserviceComponent } from './lieferservice.component';
import { DienstleisterPageComponent } from './dienstleister-page/dienstleister-page.component';
import { BestellenPageComponent } from './bestellen-page/bestellen-page.component';
import { ArtikelPageComponent } from './artikel-page/artikel-page.component';


@NgModule({
  declarations: [
    LieferserviceComponent,
    DienstleisterPageComponent,
    BestellenPageComponent,
    ArtikelPageComponent
  ],
  imports: [
    CommonModule,
    LieferserviceRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatListModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    MatExpansionModule,
    SharedModule,
    MatCardModule,
    MatCheckboxModule,
    CdkTableModule
  ]
})
export class LieferserviceModule { }
