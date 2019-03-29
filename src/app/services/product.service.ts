import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Product} from './Product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    http: any;

    constructor(http: HttpClient) {
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
                        quantity: products.quantity,
                        description: products.description,
                        icon: products.icon,
                        href: products.href
                    };
                });
            }));
    }
}
