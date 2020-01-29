import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("map", {static: false}) mapElement: ElementRef;
  clickListener: any;
  googleMaps: any;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}
  ngOnDestroy() {
    this.googleMaps.event.removeListener(this.clickListener);
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    this.getGoogleMaps().then(googleMaps => {
      const mapEl = this.mapElement.nativeElement;
      const map = new googleMaps.Map(mapEl, {
        center: { lat: 10.781787, lng: 106.623438 },
        zoom: 16
      });
      this.googleMaps = googleMaps;
      this.googleMaps.event.addListenerOnce(map, 'idle', () => {
        console.log("hereee");
        mapEl.classList.add('visible');
        // this.renderer.addClass(mapEl, 'visible');
      });

      this.clickListener = map.addListener('click', event => {
        console.log("event: ", event);
        const selectedCoors = {lat: event.latLng.lat(), lng: event.latLng.lng()}
        this.modalCtrl.dismiss(selectedCoors);
      })
    }).catch(e => {
      console.log("erro2: ", e);
    })
  }

  private getGoogleMaps(): Promise<any> {
    const win = window as any;
    const googleModule = win.google;
    console.log("win.google: ", win.google);
    if (googleModule && googleModule.maps){
      return Promise.resolve(googleModule.maps);
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://maps.googleapis.com/maps/api/js?key=" + environment.googleMapAPIKey +"&callback=initMap";
      script.async = true;
      script.defer = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
      script.onload = () => {
        const loadedGoogleModule = win.google;
        if (loadedGoogleModule && loadedGoogleModule.maps){
          resolve(loadedGoogleModule.maps);
        }
        else{
          reject('Google maps SDK not available.');
        }
      }
    })
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }
}
