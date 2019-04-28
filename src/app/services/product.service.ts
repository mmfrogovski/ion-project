import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Product} from './Product';
import {HTTP} from '@ionic-native/http/ngx';
// import {from} from 'rxjs';
// import {Platform} from '@ionic/angular';
// import {LoadingController} from '@ionic/angular';
import {finalize} from 'rxjs/operators';
import {RequestOptions} from '@angular/http';

const httpOptions = {
    headers: new HttpHeaders({
        'ContentType': 'application/json',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
    })
};

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    http: any;

    constructor(http: HttpClient, public httpNative: HTTP) {
        this.http = http;
    }

    getProducts(): Observable<Product[]> {
        return this.http.get('http://localhost:5000/api/product')
            .pipe(map((data) => {
                const productList = [].slice.call(data);
                return productList.map(function (products: any) {
                    return {
                        id: products.id,
                        name: products.name,
                        description: products.description,
                        image: products.image
                    };
                });
            }));
    }


    // async postProduct(item) {
    //     const body = new FormData();
    //     body.append('name', item.name);
    //     body.append('description', item.description);
    //     body.append('image', item.image);
    //     const loading = await this.loadingCtrl.create();
    //     await loading.present();
    //     // const body = JSON.stringify(item);
    //     from(this.nativeHttp.post('http://localhost:5000/api/product', body, {'ContentType': 'application/json'}))
    //         .pipe(
    //             finalize(() => loading.dismiss())
    //         ).subscribe(data => {
    //         console.log(data);
    //     });
    // }


    postProduct(item: Product): Observable<Product> {
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        const postData: Product = {
            name: item.name,
            description: item.description,
            image: item.image
        };

        const url = `http://localhost:5000/api/product`;
        // console.log(url);
        return this.http.post(url, postData, {'ContentType': 'application/json'});
    }

    deleteRequestToAPI(product: Product): Observable<Product> {
        const productName = product.name;
        const url = `http://localhost:5000/api/product/${productName}`;
        console.log(url);
        return this.http.delete(url, {'ContentType': 'application/json'});
    }
}
