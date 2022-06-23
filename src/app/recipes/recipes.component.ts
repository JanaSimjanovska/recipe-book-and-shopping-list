import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // recipeToDisplayInRecipeList: Recipe;
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
    // this.recipeService.recipeSelected
    //   .subscribe(
    //     (recipe: Recipe) => {
    //       this.selectedRecipe = recipe;
    //     }
    //   )
  }

  // onInterceptedRecipe(recipe: Recipe){
  //   this.recipeToDisplayInRecipeList = recipe;
  //   console.log(this.recipeToDisplayInRecipeList);
  // }
}
