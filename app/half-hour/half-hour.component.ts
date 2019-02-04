import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-half-hour',
  templateUrl: './half-hour.component.html',
  styleUrls: ['./half-hour.component.css']
})
export class HalfHourComponent implements OnInit {

  omdbData = ['0386676', '1865718', '0098904', '4508902', '0460649', '2861424', '0108778', '1305826', '0096697', '0149460'];
  randomItem = this.omdbData[Math.floor(Math.random() * this.omdbData.length - 1) + 1];
  // getData(randomItem);
  constructor() { }

  ngOnInit() {
    fetch('https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i=tt' + randomItem + '&apikey=a963a012');
      .then(response => response.json());
      .then(res => this.omdbData = res.Search);
  }

}
