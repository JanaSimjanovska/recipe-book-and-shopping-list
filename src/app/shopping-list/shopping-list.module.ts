import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { RecipesModule } from "../recipes/recipes.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        ShoppingListEditComponent,
        ShoppingListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule, 
        ShoppingListRoutingModule, 
        SharedModule
    ]
})
export class ShoppingListModule {}