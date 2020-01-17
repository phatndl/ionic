import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place: Place;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placeService: PlacesService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      if (!param.has("placeId")){
        this.navCtrl.navigateBack("/places/tabs/offers");
        return;
      }
      this.placeService.getPlace(param.get('placeId')).subscribe(place => {
        this.place = place;
      });
    })
    this.form = new FormGroup({
      title: new FormControl(this.place.title, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      description: new FormControl(this.place.description, {
        updateOn: "change",
        validators: [Validators.required, Validators.maxLength(180)]
      })
    });
  }

  onUpdate() {
    console.log(this.form);
    if (!this.form.valid){
      return;
    }
    const {title, description} = this.form.value;
    this.loadingCtrl.create({
      message: 'loading...'
    }).then(loadingEl => loadingEl.present());

    this.placeService.updatePlace(this.place.id, {
      title,
      description
    }).subscribe(() => {
      this.loadingCtrl.dismiss();
    });
  }

}
