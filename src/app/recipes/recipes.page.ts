import {Component, OnInit} from '@angular/core';
import {Recipe} from '../services/Recipe';
import {NavController} from '@ionic/angular';
import {RecipesService} from '../services/recipes.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
    recipesList: Recipe[] = [];

    constructor(private recipesService: RecipesService, public navCtrl: NavController) {
    }

    ngOnInit() {
        this.recipesService.getRecipes().subscribe((data) => {
            this.recipesList = data;
            // console.log(this.recipesList);
        });
    }

    pushRecipe(item) {
        this.navCtrl.goForward(`/recipe-details/${item.name}/${item.description}/${item.image}/${item.ingredients}`);
        // console.log(item);
    }

}
