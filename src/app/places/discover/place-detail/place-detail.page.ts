import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { CreateBookingsComponent } from '../../../bookings/create-bookings/create-bookings.component';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {
  private place: Place;
  private placeSub: Subscription;
  constructor(
    private activedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private placeService: PlacesService,
    private actionSheet: ActionSheetController
  ) { }

  ngOnInit() {
    this.activedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')){
        this.navCtrl.navigateBack("/places/tabs/discover");
        return;
      }
      this.placeService.getPlace(paramMap.get('placeId')).subscribe(place => {
        this.place = place;
      });
      console.log("this.place: ", this.place);
    })
  }

  ngOnDestroy() {
    
  }

  onBook() {
    // this.router.navigateByUrl("/places/tabs/discover");
    // this.navCtrl.navigateBack("/places/tabs/discover");
    // this.navCtrl.pop()
    this.actionSheet.create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          handler: () => {
            this.openBookingModal('select');
          }
        },
        {
          text: 'Random Date',
          handler: () => {
            this.openBookingModal('random');
          }
        },
        {
          text: 'Cancel'
        }

      ]
    }).then(actionEl => {
      actionEl.present();
    })
  }

  openBookingModal(mode: 'select' | 'random') {
    this.modalCtrl.create({
      component: CreateBookingsComponent,
      componentProps: {
        selectedPlace: this.place,
        selectedMode: mode
      }
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(result => {
      console.log("result: ", result);
    })
  } 

}
