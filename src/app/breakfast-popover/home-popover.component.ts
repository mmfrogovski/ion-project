import {Component, OnInit} from '@angular/core';
import {RecipesService} from '../services/recipes.service';
import {Recipe} from '../services/Recipe';
import {NavController, PopoverController} from '@ionic/angular';


@Component({
    selector: 'app-home-popover',
    templateUrl: './home-popover.component.html',
    styleUrls: ['./home-popover.component.scss']
})
export class HomePopoverComponent implements OnInit {

    chosenBreakfast: Recipe;

    recipesList: Recipe[] = [];

    breakFast: Recipe[] = [];

    constructor(private recipesService: RecipesService, private navCtrl: NavController, public popoverCtrl: PopoverController) {
    }

    ngOnInit() {
        this.recipesService.getRecipes().subscribe((data) => {
            this.recipesList = data;
            // console.log(this.recipesList);
        });
        this.chosenBreakfast = this.recipesList[0];
        // this.randomBreakfast();
    }

    randomBreakfast() {
        this.recipesList.forEach((cur) => {
            console.log(cur);
            if (cur.type === 'breakfast') {
                this.breakFast.push(cur);
            }
        });
        // console.log(this.breakFast[0]);
        // const min = 0;
        // const max = this.breakFast.length;
        // const num = Math.floor(Math.random() * (+max - +min)) + +min;
        // console.log(this.breakFast[num]);
        // return this.breakFast[num];
    }

    close() {
        this.popoverCtrl.dismiss();
    }

}
