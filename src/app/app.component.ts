import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  // My solution is commented out
  // displayRecipes: boolean = true;
  // displayShoppingList: boolean; 
  // loadedFeature = "recipes";
  // recipes: {recipeName: string, recipeDescription: string}[];

  constructor() {}

  // recipesClicked(value){
  //   this.displayRecipes = value;
  //   this.displayShoppingList = false;
  // }
  // shoppingListClicked(value){
  //   this.displayShoppingList = value;
  //   this.displayRecipes = false;
  // }

  // onNavigate(feature){
  //   this.loadedFeature = feature;
  // }
}
