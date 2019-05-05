import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
    {
        path: 'products/:item.name/:item.description/:item.image',
        loadChildren: './products/products.module#ProductsPageModule'
    },
    {path: 'to-buy/:item.name/:item.description/:item.image', loadChildren: './to-buy/to-buy.module#ToBuyPageModule'},
    {path: 'home', loadChildren: './home/home.module#HomePageModule'},
    {
        path: 'product-card/:item.name/:item.description/:item.image',
        loadChildren: './product-card/product-card.module#ProductCardPageModule'
    },
    {path: 'all-products', loadChildren: './all-products/all-products.module#AllProductsPageModule'}


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
