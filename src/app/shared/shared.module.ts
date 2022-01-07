import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ArtikelComponent } from './artikel/artikel.component';


@NgModule({
  declarations: [
    ArtikelComponent
  ],
  exports     : [
    ArtikelComponent
  ],
  imports     : [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FlexModule,
    MatListModule
  ]
})
export class SharedModule {
}
