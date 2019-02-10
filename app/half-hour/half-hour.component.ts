import { Component, OnInit } from '@angular/core';
import { OmdbServiceClient } from '../services/omdb.service.client';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-half-hour',
  templateUrl: './half-hour.component.html',
  styleUrls: ['./half-hour.component.css']
})
export class HalfHourComponent implements OnInit {

  constructor(private http: Http) {
  }
  data: any [];
  id;
  getRandom() {
    const omdbData = ['0386676', '1865718', '0098904', '4508902', '0460649', '2861424', '0108778', '1305826', '0096697', '0149460'];
    const randomItem = omdbData[Math.floor(Math.random() * omdbData.length - 1) + 1];
    return this.id =  randomItem;
  }
    again(): void {
      window.location.reload();
  }
  ngOnInit() {
    this.data = [];

    this.getRandom();
    this.http
        .get('https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i=tt' + this.id + '&apikey=a963a012')
        .pipe(map((res: Response) => res.json()))
        .subscribe(data => {
          this.data = Array.of(data);
          console.log(data);
          console.log(this.id);
        });
      }


}
