import { Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Lasagna',
      'Delicious and easy meal',
      'https://sanremo.com.au/content/uploads/2017/05/san-remo-traditional-lasagna-for-website.jpg',
      [
        new Ingredient('Meat', 3),
        new Ingredient('Cheese', 5)
      ]),
    new Recipe('Cannelloni',
      'Italian delicacy',
      'https://www.delallo.com/wp-content/uploads/2014/08/manicotti.jpg',
      [
        new Ingredient('Beef', 8),
        new Ingredient('Tomato Sauce', 1)
      ]),
    new Recipe('Linguine Pasta',
      'Pasta variety',
      'http://goodtoknow.media.ipcdigital.co.uk/111/000004506/02e1_orh412w625/stilton-and-bacon-linguine-pasta.jpg',
      [
        new Ingredient('Garlic', 2),
        new Ingredient('Parmesan Cheese', 5),
        new Ingredient('Cream', 1)
      ]),
    new Recipe('Pizza',
      'Meat lovers pizza',
      'https://media-cdn.tripadvisor.com/media/photo-s/04/52/7b/80/city-pizza-italian-cuisine.jpg',
      [
        new Ingredient('Pepperoni', 10),
        new Ingredient('Bacon', 5),
        new Ingredient('Feta Cheese', 3)
      ]),
    new Recipe('Quinoa Salad',
      'Healthy and nutritious meal',
      'http://www.onceuponachef.com/images/2013/05/thai-quinoa-salad-11.jpg',
      [
        new Ingredient('Cucumber', 1),
        new Ingredient('Onion', 2),
        new Ingredient('Quinoa', 5)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice(); // slice returns a new array which is an exact copy of the one in this Service
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice()); // emit a new value which is a new copy of our recipes
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
