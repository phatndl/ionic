import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../places.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  places: Place[] = [];
  placeSub: Subscription;
  constructor(
    private placesService: PlacesService 
  ) { }

  ngOnInit() {
    this.placesService.places.subscribe(places => {
      this.places = places;
    })
    // this.places = this.placesService.places;
  }

  ionViewWillEnter() {
    this.placeSub = this.placesService.places.subscribe(place => {
      console.log("okkk", place);
      this.places = place;
    });
  }
  
  ionViewDidEnter() {
    this.placeSub.unsubscribe();
  }

}
