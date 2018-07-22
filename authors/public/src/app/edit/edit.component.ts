import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editing: any;
  constructor(private _httpService: HttpService,  private _router: Router, private _route: ActivatedRoute,) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {this._httpService.showAuthor(params).subscribe(data=>{
      console.log(data);
      this.editing = data;
    });
    })
  }

  submitEdit(editing){
    console.log(this.editing);
    let obs = this._httpService.editAuthor(this.editing);
    obs.subscribe(data=>{
      console.log(data);
    })
  }

}
