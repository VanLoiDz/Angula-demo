import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/Service/comic.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit{
  listComic:any=[];
  listNameGenre:any=[];
  id:any;
  comic_name:any;
  avatar:any;
  id_genre:any;
  author:any;
  describe:any;
  status:any;
  edit:any={};

  constructor(private service:ComicService) {}

  ngOnInit(): void {
    this.reloadListComic();
    this.getNameGenre();
  }

  reloadListComic(){
    this.service.getListComic().subscribe(data => {
      this.listComic = data;
    })
  }

  addComic(){
    var val = {
      comic_name:this.comic_name,
      avatar:this.avatar,
      id_genre:this.id_genre,
      author:this.author,
      describe:this.describe,
      status:this.status
    };
    this.service.postComic(val).subscribe(res => {
      this.reloadListComic();
      alert(res.toString());
    });
  }

  getDetailComic(comic:any) {
      this.edit = comic;
  }

  editComic() {
    var val = {
      id:this.edit.id,
      comic_name:this.edit.comic_name,
      avatar:this.edit.avatar,
      id_genre:this.edit.id_genre,
      author:this.edit.author,
      describe:this.edit.describe,
      status:this.edit.status
    };
    this.service.putComic(val).subscribe(res => {
      this.reloadListComic();
      alert(res.toString());
    });
  }

  deleteComic(comic:any){
    if(confirm('Bạn có chắc muốn xoá không')){
      this.service.deleteComic(comic.id).subscribe(data => {
        alert(data.toString())
        this.reloadListComic();
      })
    }
  }

  getNameGenre(){
    this.service.getNameGenreComic().subscribe(data => {
      this.listNameGenre = data;
    })
  }
}
