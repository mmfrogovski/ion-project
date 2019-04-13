import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {NavController} from '@ionic/angular';
import {Product} from '../services/Product';

@Component({
    selector: 'app-products',
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
    productsList: Product[] = [];


    constructor(private productService: ProductService, public navCtrl: NavController) {
    }

    ngOnInit() {
        this.productService.getProducts().subscribe((data) => {
            this.productsList = data;
            console.log(this.productsList);
        });
    }

    pushProduct(item) {
        this.navCtrl.goForward(`/product-card/${item.name}/${item.description}/${item.image}`);
        console.log(item);
    }

}
