import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditingIngredient = new Subject<number>();

   private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

   getIngredients() {
     return this.ingredients.slice();
   }

   getIngredient(index: number) {
     return this.ingredients[index];
   }

   addIngredient(ingredient: Ingredient) {
     this.ingredients.push(ingredient);
     this.ingredientsChanged.next(this.ingredients.slice()); // passing a copy of the changed array after new ingredient has been added
   }

   addIngredients(ingredients: Ingredient[]) {
     this.ingredients.push(...ingredients);
     this.ingredientsChanged.next(this.ingredients.slice()); // passing a copy of the changed array after new ingredients have been added
   }

   updateIngredient(index: number, newIngredient: Ingredient) {
     this.ingredients[index] = newIngredient;
     this.ingredientsChanged.next(this.ingredients.slice());
   }

   deleteIngredient(index: number) {
     this.ingredients.splice(index, 1);
     this.ingredientsChanged.next(this.ingredients.slice());
   }
}
