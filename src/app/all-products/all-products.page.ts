import {Component, OnInit} from '@angular/core';
import {AllProductService} from '../services/all-product.service';
import {NavController} from '@ionic/angular';
import {Product} from '../services/Product';
import {ToBuyService} from '../services/to-buy.service';

@Component({
    selector: 'app-all-products',
    templateUrl: './all-products.page.html',
    styleUrls: ['./all-products.page.scss'],
})
export class AllProductsPage implements OnInit {
    productsList: Product[] = [];
    passedProduct = [];
    private dataFromService: any;

    constructor(private productService: AllProductService, public navCtrl: NavController, private buyProduct: ToBuyService) {
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
        console.log('item pushed');
    }

    pushToFridge(item: Product) {
        // this.navCtrl.goForward(`products/${item.name}/${item.description}/${item.image}`);
        this.productService.postProduct(item).subscribe(res => {
            console.log(res);
        });
        // console.log(item);
        console.log('item pushed');
    }

    pushToBasket(item: Product) {
        // this.navCtrl.goForward(`to-buy/${item.name}/${item.description}/${item.image}`);
        // console.log(item);
        this.buyProduct.postProduct(item).subscribe(res => {
            console.log(res);
        });
        console.log('item pushed');
    }
}
