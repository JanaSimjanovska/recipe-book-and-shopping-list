import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe>();                           
    // recipeSelected = new Subject<Recipe>();   
    recipesChanged = new Subject<Recipe[]>();                      

        // private recipes: Recipe[] = [
        //     new Recipe(
        //         "Tavche Gravche", 
        //         "Tasty baked beans with loooots of onion", 
        //         "https://stringfixer.com/files/11457541.jpg",
        //         [
        //             new Ingredient("Beans", 1000),
        //             new Ingredient("Onion", 1000),
        //         ]),
        //     new Recipe(
        //         "Eclairs", 
        //         "Delicious vanilla-filled choux pastry dipped in chocolate", 
        //         "https://www.thespruceeats.com/thmb/MkhYTs1-FUA62LUrUb_F0bqPy9A=/1500x1000/filters:fill(auto,1)/chocolate-eclairs-recipe-1375148-hero-01-e9f7cc83531b4110ad0b6ef0cfb125d8.jpg",
        //         [
        //             new Ingredient("Eggs", 12),
        //             new Ingredient("Chocolate", 3),
        //             new Ingredient("Flour", 1),
        //         ])
        // ];

    private recipes: Recipe[] = [];
 
    constructor(private shoppingListService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice()
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        console.log(this.recipes);
        
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number,newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
