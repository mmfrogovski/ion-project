import {Component, OnInit} from '@angular/core';
import {Recipe} from '../services/Recipe';
import {Product} from '../services/Product';
import {RecipesService} from '../services/recipes.service';
import {NavController} from '@ionic/angular';
import {ProductService} from '../services/product.service';

@Component({
    selector: 'app-dinner',
    templateUrl: './dinner.page.html',
    styleUrls: ['./dinner.page.scss'],
})
export class DinnerPage implements OnInit {

    recipesList: Recipe[] = [];

    sortedList: Recipe[] = [];

    productList: Product[] = [];

    checkedList: Recipe[] = [];

    constructor(private recipeService: RecipesService, private navCtrl: NavController, private prodService: ProductService) {
    }

    ngOnInit() {
        this.prodService.getProducts().subscribe((res) => {
            this.productList = res;
            console.log(this.productList);
        });
        this.recipeService.getRecipes().subscribe((data) => {
            this.recipesList = data;
            this.getByType();
            this.getByIngredients();
            // console.log(this.recipesList);
        });
        // console.log(this.sortedList);
    }

    getByType() {
        this.recipesList.forEach((cur) => {
            // console.log(cur);
            if (cur.type === 'dinner') {
                this.sortedList.push(cur);
                console.log(cur);
            }
        });
    }

    getByIngredients() {
        this.sortedList.forEach((cur) => {
            if (this.checkProducts(cur)) {
                this.checkedList.push(cur);
            }
        });
    }

    checkProducts(cur) {
        const str = cur.ingredients.split('|');
        console.log(str);
        if (this.productList.length === 0) {
            return false;
        }
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < this.productList.length; j++) {
                if (str[i] === this.productList[j].name) {
                    break;
                }
                if (j === this.productList.length - 1) {
                    return false;
                }
            }
        }
        return true;
    }

    pushRecipe(item) {
        this.navCtrl.goForward(`/recipe-details/${item.name}/${item.description}/${item.image}/${item.ingredients}`);
    }

    randomDish() {
        const min = 0;
        const max = this.checkedList.length;
        if (max === 0) {
            alert('list is empty');
        } else {
            const i = Math.floor(Math.random() * (max - min)) + min;
            // alert(i);
            // alert(this.checkedList[i].name);
            this.navCtrl.goForward(`/recipe-details/${this.checkedList[i].name}/
        ${this.checkedList[i].description}/${this.checkedList[i].image}/${this.checkedList[i].ingredients}`);
        }
    }
}
