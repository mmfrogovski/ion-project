import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './Product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToBuyService {
  http: any;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('http://192.168.100.2:5000/api/buy-products')
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

    const url = `http://localhost:5000/api/buy-products`;
    // console.log(url);
    return this.http.post(url, postData, {'ContentType': 'application/json'});
  }

  deleteRequestToAPI(product: Product): Observable<Product> {
    const productName = product.name;
    const url = `http://localhost:5000/api/buy-products/${productName}`;
    console.log(url);
    return this.http.delete(url, {'ContentType': 'application/json'});
  }
}
