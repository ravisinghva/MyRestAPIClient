import { Component, OnInit } from '@angular/core';
import { Place } from '../data/place';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'My Places';
  places: any;
  selectedPlace: Place;
  myNewPlace: Place = new Place();
  firstName : string = "Ravi";
  lastName : string = "Singh";
  
  constructor(private placeService: PlaceService) { }

  getPlaces(): void {
    //console.log("Calling get Places")
    this.placeService.getPlaces().then(places1 => this.places = places1.json());
  }

  ngOnInit(): void {
    this.getPlaces();
  }

  onSelect(place: Place): void {
    //console.log(place)
    this.selectedPlace = place;
  }

  addNewPlace(): void {
    if (this.myNewPlace) {
     
      let newPlace : Place = new Place();
      newPlace.latitude = this.myNewPlace.latitude;
      newPlace.longitude = this.myNewPlace.longitude;
      newPlace.address = this.myNewPlace.address;
      newPlace.desc = this.myNewPlace.desc;
      newPlace.name = this.myNewPlace.name;
      //console.log(newPlace);
      //this.placeService.addPlace(newPlace);
      this.placeService.addPlacePromise(newPlace)
                     .then(
                       place  => this.getPlaces(),
                       error =>  console.log(error));
    }
  }
  deletePlace(): void {
    if (this.selectedPlace) {
      this.placeService.deletePlace(this.selectedPlace)
                    .then(
                       (place)  => {this.getPlaces(); this.selectedPlace = null},
                       error =>  console.log(error));
    }
  }
}
