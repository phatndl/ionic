import { NgModule } from '@angular/core';
import { LocationPickerComponent } from './pickers/location-picker/location-picker.component';
import { MapModalComponent } from './map-modal/map-modal.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@NgModule({
    declarations: [LocationPickerComponent, MapModalComponent],
    exports: [LocationPickerComponent, MapModalComponent],
    entryComponents: [MapModalComponent],
    imports: [CommonModule, IonicModule, HttpClientModule],
    providers: [Geolocation]
})

export class ShareModule {};