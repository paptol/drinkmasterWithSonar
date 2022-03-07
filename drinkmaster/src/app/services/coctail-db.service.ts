import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { BackendService } from 'src/app/services/backend.service';
import { CoctailDetailsModel, Ingredient } from '../models/CoctailDetailsModel';
import { CoctailListModel } from '../models/CoctailListModel';

@Injectable({
  providedIn: 'root'
})
export class CoctailDbService {

  constructor(private backendService: BackendService) { }

  getDrinksByLetter(letter: string): Observable<Array<CoctailListModel>>{
    return this.backendService.invokeObjectGet(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`).pipe(
      map(response =>{
        let list = Array<CoctailListModel>();
        response.drinks.forEach(drink => {
          list.push(drink as CoctailListModel);
        });

        return list;
    }));
  }
  getDetails(drinkId: string):Observable<CoctailDetailsModel> {
    return this.backendService.invokeObjectGet(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`).pipe(
      map(response => {
        let drink = new CoctailDetailsModel();
        if(response.drinks && response.drinks.length > 0){
          let item = response.drinks[0];
          drink.idDrink = item.idDrink;
          drink.strDrink = item.strDrink;
          drink.strAlcoholic = item.strAlcoholic;
          drink.strCategory = item.strCategory;
          drink.strDrinkThumb = item.strDrinkThumb;
          drink.strGlass = item.strGlass;
          drink.strInstructions = item.strInstructions;

          if(item.strIngredient1) drink.ingredients.push(new Ingredient(item.strIngredient1, item.strMeasure1));
          if(item.strIngredient2) drink.ingredients.push(new Ingredient(item.strIngredient2, item.strMeasure2));
          if(item.strIngredient3) drink.ingredients.push(new Ingredient(item.strIngredient3, item.strMeasure3));
          if(item.strIngredient4) drink.ingredients.push(new Ingredient(item.strIngredient4, item.strMeasure4));
          if(item.strIngredient5) drink.ingredients.push(new Ingredient(item.strIngredient5, item.strMeasure5));
          if(item.strIngredient6) drink.ingredients.push(new Ingredient(item.strIngredient6, item.strMeasure6));
        }
        return drink;
      }));
  }
}
