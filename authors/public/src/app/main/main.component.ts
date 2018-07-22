import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  authors:any;
  
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.showAuthors();
  }
  showAuthors(){
    let obs = this._httpService.getAuthors();
    obs.subscribe(data=>{
      console.log("got our authors!", data);
      this.authors = data;
    })
  }
  deleteAuthor(author: any){
    let obs = this._httpService.deleteAuthor(author);
    obs.subscribe(data=>{
      console.log("deleted", data);
      this.showAuthors()
    })
  }
  
}
