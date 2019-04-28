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


    postProduct(item): Observable<Product> {
        const data = {
            name: item.name,
            description: item.description,
            image: item.image
        };
        return this.http.post('http://localhost:5000/api/product', data)
            .pipe(map(res => res));
    }
}
