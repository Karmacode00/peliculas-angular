import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-one-hour',
  templateUrl: './one-hour.component.html',
  styleUrls: ['./one-hour.component.css']
})
export class OneHourComponent implements OnInit {

  constructor(private http: Http) {
  }
  data: any [];
  id;
  getRandom() {
    const omdbData = ['0248654', '0098936', '0248654', '0052520', '3205802', '1796960', '1442462', '2356777', '0903747', '0944947'];
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
