import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Place } from '../../places/places.model';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-create-bookings',
  templateUrl: './create-bookings.component.html',
  styleUrls: ['./create-bookings.component.scss'],
})
export class CreateBookingsComponent implements OnInit {
  @Input() selectedPlace: Place;
  @Input() selectedMode: 'select' | 'random';
  @ViewChild('f', {static: true}) form: NgForm;
  startDate: Date;
  endDate: Date
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    const availableFrom = new Date(this.selectedPlace.availableFrom);
    const availableTo = new Date(this.selectedPlace.availableTo);
    if (this.selectedMode === 'random') {
      this.startDate = new Date(availableFrom.getTime() + Math.random() * (availableTo.getTime() - 7 * 24 * 3600 * 1000 - availableFrom.getTime()));
      this.endDate = new Date(this.startDate.getTime() + Math.random() * (this.startDate.getTime() + 7 * 24 * 3600 * 1000));
    }else{
      this.startDate = availableFrom;
      this.endDate = availableTo;
    }
  }

  onBook() {
    if (!this.form.valid || !this.datesValid()){
      return;
    }

    this.modalCtrl.dismiss({ bookingDate: this.form.value}, 'confirm')
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  datesValid() {
    const startDate = this.form.value['date-from'];
    const endDate = this.form.value['date-to'];
    return endDate > startDate;
  }

}
