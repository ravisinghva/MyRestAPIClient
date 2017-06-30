import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Place } from '../data/place';

@Injectable()
export class PlaceService {

    constructor(private _http: Http) {}  
    public placeData : Place[];
    
    // Get data without promise
    public getPlacesDirect():any {
        let url = 'http://localhost:3000/places/';
        let data = this._http.get(url);
        return data;
    }
    // get Data as promise    
    public getPlaces(): Promise<any> {
        let url = 'http://localhost:3000/places/';
        return this._http.get(url).toPromise();
    }
    // add a new entry in to Places 
    public addPlace(place): any {
        let url = 'http://localhost:3000/places/';
        let data = this._http.post(url, place);
        return data;
    }
    // add a new entry in to Places 
    public addPlacePromise (place): Promise<any> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let url = 'http://localhost:3000/places/';
      let options = new RequestOptions({ headers: headers });

      return this._http.post(url, place, options)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
    }

    // Parse Data
    private extractData(res: Response) {
      let body = res.json();
      console.log(body);
      return body.data || { };
    }

    private handleError (error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Promise.reject(errMsg);
    }

    // Delete a place record
    public deletePlace(place): Promise<any> {
        let url = 'http://localhost:3000/places/' + place._id;
        let data = this._http.delete(url) 
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);;
        console.log(url);
        return data;
    }

  // simulate long running call
    public getPlacesSlowly(delay): Promise<Place[]> {
      return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getPlaces()), delay);
    });
  }
}