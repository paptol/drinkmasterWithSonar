export class CoctailDetailsModel {
  idDrink: string;
  strDrink: string;
  strAlcoholic: string;
  strCategory: string;
  strDrinkThumb: string;
  strGlass: string;
  strInstructions: string;
  ingredients: Array<Ingredient> = [];
}

export class Ingredient {
  name: string;
  amount: string;
  /**
   *
   */
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }
}
