import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './CodeAdmin/comic/comic.component';
import { ComicgenreComponent } from './CodeAdmin/comicgenre/comicgenre.component';

const routes: Routes = [
  { path: 'admin/comic-genre', component:  ComicgenreComponent},
  { path: 'admin/comic', component:  ComicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
