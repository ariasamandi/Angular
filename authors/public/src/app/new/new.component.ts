import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor: any;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newAuthor = {name: ""}
  }
  addAuthor(){
    console.log(this.newAuthor);
    this._httpService.createAuthor(this.newAuthor).subscribe(data=>{
      this._router.navigate(['/'])
      this.newAuthor = {name: ""};

    })
  }

}
