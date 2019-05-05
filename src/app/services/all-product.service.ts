import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Product} from './Product';

@Injectable({
    providedIn: 'root'
})

export class AllProductService {
    http: any;

    constructor(http: HttpClient) {
        this.http = http;
    }

    getProducts(): Observable<Product[]> {
        return this.http.get('http://localhost:5000/api/all-products')
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
}
