import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  readonly APIUrl = "http://localhost:5140/api";

  constructor(private http:HttpClient) { }

  //ComicGenre
  getListComicGenre():Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/ComicGenre');
  }

  postComicGenre(val:any) {
    return this.http.post(this.APIUrl + '/ComicGenre', val);
  }

  putComicGenre(val:any) {
    return this.http.put(this.APIUrl + '/ComicGenre', val);
  }

  deleteComicGenre(id:any) {
    return this.http.delete(this.APIUrl + '/ComicGenre/' + id);
  }

//Comic
  getListComic():Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Comic');
  }

  postComic(val:any) {
    return this.http.post(this.APIUrl + '/Comic', val);
  }

  putComic(val:any) {
    return this.http.put(this.APIUrl + '/Comic', val);
  }

  deleteComic(id:any) {
    return this.http.delete(this.APIUrl + '/Comic/' + id);
  }

  getNameGenreComic():Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Comic/GetAllIdGenreName');
  }
}
