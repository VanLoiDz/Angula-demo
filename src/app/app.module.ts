import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './AdminLTE/header/header.component';
import { MenuComponent } from './AdminLTE/menu/menu.component';
import { FooterComponent } from './AdminLTE/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { ComicService } from './Service/comic.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComicgenreComponent } from './CodeAdmin/comicgenre/comicgenre.component';
import { ComicComponent } from './CodeAdmin/comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ComicgenreComponent,
    ComicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
