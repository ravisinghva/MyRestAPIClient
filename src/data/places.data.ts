import {Place} from './place';

export class PlacesData {
     private places : Place[] = [
        {
            latitude: 38.924037, 
            longitude: -77.543919, 
            address: "123 main Street Drive, Chantilly VA 20152",
            desc: "This is my Home",
            name: "Home" 
        },
        {
            latitude: 38.924037, 
            longitude: -77.543919, 
            address: "123 main Street Drive, Chantilly VA 20152",
            desc: "This is my Home",
            name: "Home 1" 
        },
        {
            latitude: 38.924037, 
            longitude: -77.543919, 
            address: "123 main Street Drive, Chantilly VA 20152",
            desc: "This is my Home",
            name: "Home 2" 
        },
        {
            latitude: 38.924037, 
            longitude: -77.543919, 
            address: "123 main Street Drive, Chantilly VA 20152",
            desc: "This is my Home",
            name: "Home 3" 
        }
];
public getData(): Place[] {
    return this.places;
}
};