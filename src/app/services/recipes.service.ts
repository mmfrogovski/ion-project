import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Recipe} from './Recipe';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    private http: any;

    constructor(http: HttpClient) {
        this.http = http;
    }

    getRecipes(): Observable<Recipe[]> {
        return this.http.get('http://localhost:5000/api/recipes')
            .pipe(map((data) => {
                const recipesList = [].slice.call(data);
                return recipesList.map(function (recipes: any) {
                    return {
                        name: recipes.name,
                        description: recipes.description,
                        image: recipes.image,
                        ingredients: recipes.ingredients,
                        type: recipes.type
                    };
                });
            }));
    }
}
