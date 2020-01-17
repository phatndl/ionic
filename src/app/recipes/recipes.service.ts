import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/11/13/14/pokemon-lets-go.jpg?w968h681",
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWfHPBOQAG77RKENGoaDvWZuIy70fglm_KHxtdkI1FhXI2XjJ7",
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];
  public recipesChanged = new Subject<Recipe[]>();
  constructor() { };

  getAllRecipes(){
    console.log("getAllRecipes: ", this.recipes);
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => recipe.id === recipeId )}
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(re => re.id !== recipeId);
    this.recipesChanged.next(this.recipes);
  }
}
