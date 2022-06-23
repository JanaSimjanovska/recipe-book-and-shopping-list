import { Component, OnInit, Input } from '@angular/core';
// import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipeToDisplay: Recipe = { name: "", description: "", imagePath: ""};
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;
  // constructor(private shoppingListService: ShoppingListService) { }

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingListClicked() {
    // for(let ingredient of recipe.ingredients) {
    //   this.shoppingListService.addIngredient(ingredient);
    // }
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route}); // This will work too, simply for demo purposes
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
