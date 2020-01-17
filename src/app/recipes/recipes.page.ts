import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  
  recipes: Recipe[];
  constructor(
    public navCtrl: NavController, 
    private nativePageTransition: NativePageTransitions, 
    private recipesService: RecipesService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("ok")
    this.recipes = this.recipesService.getAllRecipes();
    // this.recipesService.recipesChanged.subscribe(recipes => {
    //   this.recipes = recipes;
    // })
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave");
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave");
  }

  ngOnDesTroy(){
    console.log("destroy");
  }
  

  // onClick(recipeId: string) {
  //   const options: NativeTransitionOptions = {
  //     direction: 'left',
  //     duration: 400,
  //     slowdownfactor: -1,
  //     iosdelay: 50
  //     // androiddelay: 50,

  //   }
  //   this.nativePageTransition.slide(options);
  //   this.navCtrl.navigateRoot(['/recipes', recipeId]);
  //   // this.router.navigate(['/recipes', recipeId]);
  // }

}
