import { Injectable } from '@angular/core';
import { Place } from './places.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    new Place('p1', 'Manhattan', 'In the heart of Newyork city', 'http://cafefcdn.com/thumb_w/650/2019/2/7/dji0030-1549523469926707943882-crop-1552302911136328518847.jpg', 190, new Date('2019-01-01'), new Date('2019-12-31'), 'abc1'),
    new Place('p2', 'Amour Toujours', 'A romantic places in Paries', 'https://top10tphcm.com/wp-content/uploads/2018/06/TPHCM-co-bao-nhieu-quan-quan-nao-lon-nhat-696x509.jpg', 189.99, new Date('2019-01-01'), new Date('2019-12-31'), 'abc2'),
    new Place('p3', 'The Foggy', 'Not a avarage city trip', 'https://top10tphcm.com/wp-content/uploads/2018/05/Danh-sach-24-quan-huyen-TPHCM-696x391.jpg', 12.34, new Date('2019-01-01'), new Date('2019-12-31'), 'abc3'),
    new Place('p3', 'The Foggy', 'Not a avarage city trip', 'https://top10tphcm.com/wp-content/uploads/2018/05/Danh-sach-24-quan-huyen-TPHCM-696x391.jpg', 12.34, new Date('2019-01-01'), new Date('2019-12-31'), 'abc'),
    new Place('p3', 'The Foggy', 'Not a avarage city trip', 'https://top10tphcm.com/wp-content/uploads/2018/05/Danh-sach-24-quan-huyen-TPHCM-696x391.jpg', 12.34, new Date('2019-01-01'), new Date('2019-12-31'), 'abc'),
    new Place('p3', 'The Foggy', 'Not a avarage city trip', 'https://top10tphcm.com/wp-content/uploads/2018/05/Danh-sach-24-quan-huyen-TPHCM-696x391.jpg', 12.34, new Date('2019-01-01'), new Date('2019-12-31'), 'abc'),
    new Place('p3', 'The Foggy', 'Not a avarage city trip', 'https://top10tphcm.com/wp-content/uploads/2018/05/Danh-sach-24-quan-huyen-TPHCM-696x391.jpg', 12.34, new Date('2019-01-01'), new Date('2019-12-31'), 'abc'),
  ]);

  constructor(
    private authService: AuthService
  ) { }

  get places(){
    // return [...this._places];
    return this._places.asObservable();
  }

  getPlace(id : string) {
    return this.places.pipe(take(1), map(places => {
      return {...places.find(place => place.id === id)};
    }))
  }

  updatePlace(id: string, selectedPlace: object) {
      return this.places.pipe(take(1), delay(1000), tap(place => {
        const placeIndex = place.findIndex(place => place.id === id);
        const updateSelectedPlace = {...place[placeIndex], ...selectedPlace};
        this._places.next([
            ...place.slice(0, placeIndex),
            updateSelectedPlace,
            ...place.slice(placeIndex+1)
          ])
          console.log("updatedPlace: ",place, this._places);
      }))
    // const placeIndex = this.places.findIndex(place => place.id === id);
  }

  addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
    const newPlace = new Place(
      Math.random().toString(), 
      title, 
      description, 
      'http://cafefcdn.com/thumb_w/650/2019/2/7/dji0030-1549523469926707943882-crop-1552302911136328518847.jpg', 
      price, 
      dateFrom, 
      dateTo, 
      this.authService.userId
    )
    // this._places.push(newPlace);
    return this.places.pipe(take(1), tap(place => {
      this._places.next(place.concat(newPlace));
    }))
  }
}
