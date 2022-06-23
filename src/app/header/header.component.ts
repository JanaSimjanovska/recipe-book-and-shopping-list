import { Component, Output, EventEmitter } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",

})
export class HeaderComponent {
    collapsed = true;
    constructor(private dataStorageService: DataStorageService) {}

    // My solution is commented out

    // @Output() displayRecipes = new EventEmitter<boolean>()
    // @Output() displayShoppingList = new EventEmitter<boolean>()
    // @Output() featureSelected = new EventEmitter<string>()

    // onSelect(feature: string){
    //     this.featureSelected.emit(feature);
    // }

    // onClickRecipes(){
    //     this.displayRecipes.emit(true);
    // }

    // onClickShoppingList(){
    //     this.displayShoppingList.emit(true)
    // }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }
}