import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.page.html',
    styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

    constructor(navCtrl: NavController, private activatedRoute: ActivatedRoute) {
    }

    passedProduct = [];

    path: any;

    ngOnInit() {
        this.passedProduct.push(this.activatedRoute.snapshot.paramMap.get('item.name'));
        this.passedProduct.push(this.activatedRoute.snapshot.paramMap.get('item.description'));
        this.passedProduct.push(this.activatedRoute.snapshot.paramMap.get('item.image'));
        this.passedProduct.push(this.activatedRoute.snapshot.paramMap.get('item.ingredients'));
        // console.log('Image: ' + this.passedProduct[2]);
        this.path = `https://st2.depositphotos.com/${this.passedProduct[2]}`;
    }

}
