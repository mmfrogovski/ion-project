import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Product} from '../services/Product';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.page.html',
    styleUrls: ['./product-card.page.scss'],
})
export class ProductCardPage implements OnInit {


    constructor(navCtrl: NavController, private activatedRoute: ActivatedRoute) {
    }

    passedProduct = [];

    path: any;

    ngOnInit() {
        this.passedProduct.push(this.activatedRoute.snapshot.paramMap.get('item.name'));
        this.passedProduct.push(this.activatedRoute.snapshot.paramMap.get('item.description'));
        this.passedProduct.push(this.activatedRoute.snapshot.paramMap.get('item.image'));
        console.log('Image: ' + this.passedProduct[2]);
        this.path = `https://st.depositphotos.com/${this.passedProduct[2]}`;

        // console.log(this.path);
        console.log(this.passedProduct);
    }

}
