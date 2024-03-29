import { Component, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",

})
export class HeaderComponent implements OnInit, OnDestroy {
    collapsed = true;
    isAuthenticated = false;
    private userSub: Subscription;
    constructor(
        private dataStorageService: DataStorageService,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.userSub = this.authService.user.subscribe(
            user => {
                this.isAuthenticated = !!user;
                console.log(!user);
                console.log(!!user);
                
            }
        );
    }

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

    onLogout() {
        this.authService.logout();
    }
    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
}