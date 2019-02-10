import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-more-time',
  templateUrl: './more-time.component.html',
  styleUrls: ['./more-time.component.css']
})
export class MoreTimeComponent implements OnInit {

  constructor(private http: Http) {
  }
  data: any [];
  id;
  getRandom() {
    const omdbData = ['0111161', '0110912', '1375666', '0816692', '0317248', '0245429', '0119698', '0081505', '0169547', '3748528'];
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


