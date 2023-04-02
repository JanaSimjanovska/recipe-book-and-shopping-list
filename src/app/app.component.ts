import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  // My solution is commented out
  // displayRecipes: boolean = true;
  // displayShoppingList: boolean; 
  // loadedFeature = "recipes";
  // recipes: {recipeName: string, recipeDescription: string}[];

  constructor(private authService: AuthService) {}

  
  ngOnInit(): void {
    this.authService.autoLogin()
  }
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
