import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class OmdbServiceClient {
  searchDataById(id: String) {
    const url = 'https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i=tt' + id + '&apikey=a963a012';
    return this.http.get(url)
      .pipe(map((response: Response) => {
        return response.json();
      }));
  }
  constructor(private http: Http) {}
}
