import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/Service/comic.service';

@Component({
  selector: 'app-comicgenre',
  templateUrl: './comicgenre.component.html',
  styleUrls: ['./comicgenre.component.css']
})
export class ComicgenreComponent implements OnInit {
  listComicGenre:any=[];
  genre_name:any;
  describe:any;
  id:any;
  edit:any={};

  constructor(private service:ComicService) {}

  ngOnInit(): void {
    this.reloadListComicGenre();
  }

  reloadListComicGenre(){
    this.service.getListComicGenre().subscribe(data => {
      this.listComicGenre = data;
    })
  }

  addGenreComic(){
    var val = {
      genre_name:this.genre_name,
      describe:this.describe
    };
    this.service.postComicGenre(val).subscribe(res => {
      this.reloadListComicGenre();
      alert(res.toString());
    });
  }

  getDetailGenreComic(genre:any) {
      this.edit = genre;
  }

  editGenreComic() {
    var val = {
      id:this.edit.id,
      genre_name:this.edit.genre_name,
      describe:this.edit.describe
    };
    this.service.putComicGenre(val).subscribe(res => {
      this.reloadListComicGenre();
      alert(res.toString());
    });
  }

  deleteGenreComic(genre:any){
    if(confirm('Bạn có chắc muốn xoá không')){
      this.service.deleteComicGenre(genre.id).subscribe(data => {
        alert(data.toString())
        this.reloadListComicGenre();
      })
    }
  }
}
