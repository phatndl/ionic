import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../places.model';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { SegmentChangeEventDetail } from '@ionic/core';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {
  loadedPlaces: Place[];
  relevantPlaces: Place[];
  private placeSub: Subscription;
  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.placeSub = this.placesService.places.subscribe(places => {
      this.loadedPlaces = places;
      this.relevantPlaces = this.loadedPlaces;
    });
  }

  ngOnDestroy() {
    this.placeSub.unsubscribe();
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  segmentChanged(e: CustomEvent<SegmentChangeEventDetail>) {
    console.log(e.detail.value);
    const v = e.detail.value;
    if (v === 'all'){
      this.relevantPlaces = this.loadedPlaces;
    }
    else{
      this.authService.userId.pipe(take(1)).subscribe(id => {
        if (!id){
          return;
        }
        this.relevantPlaces = this.loadedPlaces.filter(place => place.userId === id);
      })
    }
  }
}
