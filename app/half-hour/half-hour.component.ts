import { Component, OnInit } from '@angular/core';
import { OmdbServiceClient } from '../services/omdb.service.client';

@Component({
  selector: 'app-half-hour',
  templateUrl: './half-hour.component.html',
  styleUrls: ['./half-hour.component.css']
})
export class HalfHourComponent implements OnInit {
  omdbData = ['0386676', '1865718', '0098904', '4508902', '0460649', '2861424', '0108778', '1305826', '0096697', '0149460'];
  randomItem = this.omdbData[Math.floor(Math.random() * this.omdbData.length - 1) + 1];
  // seachData(randomItem);
  id: String;
  result: Object;
  searchData(id: String) {
    this.omdbService.searchDataById(id)
    .subscribe((result) => {
      this.result = result;
      console.log(result);
    });
  }

  constructor(private omdbService: OmdbServiceClient) { }

  ngOnInit() {
  }

}
