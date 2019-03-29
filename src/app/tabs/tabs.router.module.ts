import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsPage} from './tabs.page';
import {HomePage} from '../home/home.page';
import {ToBuyPage} from '../to-buy/to-buy.page';
import {ProductsPage} from '../products/products.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'products',
                outlet: 'products',
                component: ProductsPage
            },
            {
                path: 'home',
                outlet: 'home',
                component: HomePage
            },
            {
                path: 'to-buy',
                outlet: 'to-buy',
                component: ToBuyPage
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
