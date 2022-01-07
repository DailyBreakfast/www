import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';
import { LieferdienstWerdenComponent } from './pages/lieferdienst-werden/lieferdienst-werden.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ChangelogComponent } from './pages/impressum/changelog/changelog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImpressumComponent,
    DatenschutzComponent,
    LieferdienstWerdenComponent,
    ContactPageComponent,
    ChangelogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        FlexModule,
        MatInputModule,
        MatCardModule,
        MatCheckboxModule,
        MatMenuModule,
        MatBadgeModule,
        MatDialogModule,
        MarkdownModule.forRoot({
            loader       : HttpClient, // optional, only if you use [src] attribute
            markedOptions: {
                provide : MarkedOptions,
                useValue: {
                    gfm        : true,
                    breaks     : false,
                    pedantic   : false,
                    smartLists : true,
                    smartypants: false,
                },
            },
        }),
        FlexLayoutModule
    ],
  providers: [

    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
