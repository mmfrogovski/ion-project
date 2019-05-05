import {Component, OnInit} from '@angular/core';
import {Product} from '../services/Product';
import {ToBuyService} from '../services/to-buy.service';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-to-buy',
    templateUrl: './to-buy.page.html',
    styleUrls: ['./to-buy.page.scss'],
})
export class ToBuyPage implements OnInit {
    productsList: Product[] = [];
    passedProduct = {name: '', description: '', image: ''};

    constructor(private productService: ToBuyService, public navCtrl: NavController, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.productService.getProducts().subscribe((data) => {
            this.productsList = data;
            console.log(this.productsList);
        });
    }

    pushProduct(item) {
        this.navCtrl.goForward(`/product-card/${item.name}/${item.description}/${item.image}`);
        // console.log(item);
    }

    removeProduct(item: Product) {
        this.productService.deleteRequestToAPI(item).subscribe(() => {
            this.productsList.forEach((cur, index) => {
                if (item.name === cur.name) {
                    this.productsList.splice(index, 1);
                }
            });
        });
    }

}
