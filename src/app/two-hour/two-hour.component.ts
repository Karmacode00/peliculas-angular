import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-two-hour',
  templateUrl: './two-hour.component.html',
  styleUrls: ['./two-hour.component.css']
})
export class TwoHourComponent implements OnInit {

  constructor(private http: Http) {
  }
  data: any [];
  id;
  getRandom() {
    const omdbData = ['2582802', '0078748', '5311514', '1049413', '0081846', '2085059', '0384766', '0266697', '1285016', '2120120'];
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

