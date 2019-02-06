import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  omdbData = ['0386676', '1865718', '0098904', '4508902', '0460649', '2861424', '0108778', '1305826', '0096697', '0149460'];
  randomItem = this.omdbData[Math.floor(Math.random() * this.omdbData.length - 1) + 1];
  result: Object;
  /*
  id: String = this.randomItem;
  result: Object;
  searchData() {
    this.omdbService.searchDataById(this.id)
    .subscribe((result) => {
      this.result = result;
      console.log(result);
    });*/
  constructor(private http: Http) {
   // console.log(this.randomItem);
   // this.searchData();
  }
  id = this.randomItem;
  searchData() {
    this.http.get('https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i=tt' + this.id + '&apikey=a963a012')
    .pipe(map(
      (res: Response) => {
        const result = res.json();
        console.log(result);
      }
    ));
    }
  ngOnInit() {
    this.searchData();
  }

}
