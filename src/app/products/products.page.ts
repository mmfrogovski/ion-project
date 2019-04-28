import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {NavController} from '@ionic/angular';
import {Product} from '../services/Product';
import {ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-products',
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
    productsList: Product[] = [];
    passedProduct = {name: '', description: '', image: ''};

    constructor(private productService: ProductService, public navCtrl: NavController, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.productService.getProducts().subscribe((data) => {
            this.productsList = data;
            console.log(this.productsList);
        });
        this.passProduct();
        // console.log(this.productsList);
    }


    passProduct() {
        this.passedProduct.name = this.activatedRoute.snapshot.paramMap.get('item.name');
        this.passedProduct.description = this.activatedRoute.snapshot.paramMap.get('item.description');
        this.passedProduct.image = this.activatedRoute.snapshot.paramMap.get('item.image');
        if (this.passedProduct.name != null) {
            this.postData(this.passedProduct);
            window.location.replace('tabs/(products:products)');
        }
    }

    pushProduct(item) {
        this.navCtrl.goForward(`/product-card/${item.name}/${item.description}/${item.image}`);
        // console.log(item);
    }

    //
    postData(item) {
        // console.log('Item to post!!! :' + name + description + image);
        console.log('Data to post');
        // console.log(data);
        this.productService.postProduct(item).subscribe(res => {
            console.log(res);
        });
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
