import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
    {
        path: 'products',
        loadChildren: './products/products.module#ProductsPageModule'
    },
    {path: 'to-buy', loadChildren: './to-buy/to-buy.module#ToBuyPageModule'},
    {path: 'home', loadChildren: './home/home.module#HomePageModule'},
    {
        path: 'product-card/:item.name/:item.description/:item.image',
        loadChildren: './product-card/product-card.module#ProductCardPageModule'
    },
    {path: 'all-products', loadChildren: './all-products/all-products.module#AllProductsPageModule'},
    {
        path: 'recipes',
        loadChildren: './recipes/recipes.module#RecipesPageModule'
    },
    {
        path: 'recipe-details/:item.name/:item.description/:item.image/:item.ingredients',
        loadChildren: './recipe-details/recipe-details.module#RecipeDetailsPageModule'
    },  { path: 'breakfast', loadChildren: './breakfast/breakfast.module#BreakfastPageModule' },
  { path: 'dinner', loadChildren: './dinner/dinner.module#DinnerPageModule' },
  { path: 'lunch', loadChildren: './lunch/lunch.module#LunchPageModule' }




];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
