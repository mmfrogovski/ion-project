import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs.router.module';

import {TabsPage} from './tabs.page';
import {HomePageModule} from '../home/home.module';
import {ToBuyPageModule} from '../to-buy/to-buy.module';
import {ProductsPageModule} from '../products/products.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        ProductsPageModule,
        HomePageModule,
        ToBuyPageModule
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
