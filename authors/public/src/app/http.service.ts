import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getAuthors()
   }
   getAuthors(){
     return this._http.get('/api/authors');
   }
   deleteAuthor(author: any){
     return this._http.delete(`/api/delete/${author._id}`);
   }
   createAuthor(author: any){
    return this._http.post('/api/create', author)
   }
   editAuthor(edited: any){
     return this._http.put(`/api/update/${edited._id}`, edited)
   }
   showAuthor(author: any){
     return this._http.get(`api/author/${author.id}`)
   }

}
