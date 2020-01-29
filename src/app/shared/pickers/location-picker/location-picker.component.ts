import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { MapModalComponent } from '../../map-modal/map-modal.component';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { PlaceLocation } from '../../../places/location.model';
import { of } from 'rxjs';
import { Plugins, Capacitor } from '@capacitor/core';
import { Coordinates } from "../../../places/location.model";
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {
  selectedLocationImage: string;
  isLoading: boolean;
  @Output() locationPick = new EventEmitter<PlaceLocation>();
  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient,
    private actionSheet: ActionSheetController,
    private alertCtrl: AlertController,
    private geoLocation: Geolocation
  ) { }

  ngOnInit() {}

  onPickLocation() {
    this.actionSheet.create({
      header: "Please choose", 
      buttons: [
        {text: "Auto-Locate", handler: () => {this.locateUser()}},
        {text: "Pick on map", handler: () => {this.openMap()}},
        {text: "Cancel", role: "cancel"},
      ]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    })
  }

  private locateUser() {
    if (!Capacitor.isPluginAvailable("Geolocation")){
      this.showErrorAlert();
      return;
    }

    Plugins.Geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(geoPosition => {
      console.log("click here");
      // this.geoLocation.getCurrentPosition().then(position => {
        const coordinates: Coordinates = {lat: geoPosition.coords.latitude, lng: geoPosition.coords.longitude};
        console.log("coordinate", coordinates);
        this.createPlace(coordinates.lat, coordinates.lng);
      }).catch(error => {
        console.log("érror: ", error);
        this.showErrorAlert();
      });

      Plugins.Geolocation.watchPosition({enableHighAccuracy: true}, (pos => {
        console.log(pos, "watch");
      }))

      // this.geoLocation.getCurrentPosition({enableHighAccuracy: true}).then((resp) => {
      //   // resp.coords.latitude
      //   // resp.coords.longitude
      //   console.log(resp, "resp");
      //  }).catch((error) => {
      //    console.log('Error getting location', error);
      //    this.showErrorAlert();
      //  });
       
      //  let watch = this.geoLocation.watchPosition();
      //  watch.subscribe((data) => {
      //    console.log("data: ", data);
      //   // data can be a set of coordinates, or an error (if an error occurred).
      //   // data.coords.latitude
      //   // data.coords.longitude
      //  });
     
    //AKTUELLE POSITION ERMITTELN
    //   function onSuccess(position)
    //   {
    //     console.log("onSuccess", position);
    //     //   alert('Latitude: '          + position.coords.latitude          + '\n' +
    //     //         'Longitude: '         + position.coords.longitude         + '\n' +
    //     //         'Altitude: '          + position.coords.altitude          + '\n' +
    //     //         'Accuracy: '          + position.coords.accuracy          + '\n' +
    //     //         'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
    //     //         'Heading: '           + position.coords.heading           + '\n' +
    //     //         'Speed: '             + position.coords.speed             + '\n' +
    //     //         'Timestamp: '         + position.timestamp                + '\n');
    //   }

    //   //Error Callback für eigene Position
    //   function onError(error)
    //   {
    //     console.log("onError");
    //       alert('code: '    + error.code    + '\n' +
    //             'message: ' + error.message + '\n');
    //   }
    //   // ADVANCED GEO PLUGIN
    //   const getLocationSecondTry = () => {
    //     var config = {
    //         "minTime": 500,         // Min time interval between updates (ms)
    //         "minDistance": 1,       // Min distance between updates (meters)
    //         "noWarn": true,         // Native location provider warnings
    //         "providers": "all",     // Return GPS, NETWORK and CELL locations
    //         "useCache": true,       // Return GPS and NETWORK cached locations
    //         "satelliteData": false, // Return of GPS satellite info
    //         "buffer": false,        // Buffer location data
    //         "bufferSize": 0,        // Max elements in buffer
    //         "signalStrength": false // Return cell signal strength data
    //     };
    //     const win = window as any;
    //     win.AdvancedGeolocation.start(onSuccess, onError, config); 
    // }
    
    //   navigator.geolocation.getCurrentPosition(onSuccess, getLocationSecondTry, {timeout: 5000, enableHighAccuracy: true});
     

    // }).catch(err => {
    //   this.showErrorAlert();
    // })
  }

  private showErrorAlert() {
    this.alertCtrl.create({
      header: "Coundn't fetch the location", message: "Please use the map to pick a location"
    }).then(alertEl => alertEl.present());
  }

  private openMap() {
    this.modalCtrl.create({
      component: MapModalComponent
    }).then(modalEl => {
      modalEl.onDidDismiss().then(result => {
        if (!result.data) return;
        const coordinates: Coordinates = { lat: result.data.lat, lng: result.data.lng};
        this.createPlace(coordinates.lat, coordinates.lng);
      })
      modalEl.present()
    });
  }

  private createPlace(lat: number, lng: number) {
    this.isLoading = true;
    const pickedLocation: PlaceLocation = {
      lat: lat,
      lng: lng,
      address: null,
      staticMapImageUrl: null
    };
    this.getAddress(lat, lng).pipe(switchMap(address => {
      pickedLocation.address = address;
      return of(this.getMapImage(pickedLocation.lat, pickedLocation.lng, 14));
    })).subscribe((staticMapImageUrl: any) => {
      pickedLocation.staticMapImageUrl = staticMapImageUrl;
      this.selectedLocationImage = staticMapImageUrl;
      console.log("staticMapImageUrl: ", staticMapImageUrl)
      this.isLoading = false;
      this.locationPick.emit(pickedLocation);
    })
  }

  private getAddress(lat: number, lng: number) {
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${environment.googleMapAPIKey}`)
    .pipe(map(geoData => {
      
      if (!geoData || !geoData.results || geoData.results.length === 0){
        return null;
      }
      return geoData.results[0].formatted_address;
    }))
  }

  private getMapImage(lat: number, lng: number, zoom: number) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=500x300&maptype=roadmap
    &markers=color:red%7Clabel:Place%7C${lat},${lng}
    &key=${environment.googleMapAPIKey}`;
  }
}
