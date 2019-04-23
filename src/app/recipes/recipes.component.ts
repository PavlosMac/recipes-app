import { Recipe } from './recipe.model';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnChanges {
  
  selectedTRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('any change',this.selectedRecipe)
  }

  selectedRecipe(data: Recipe) {
  this.selectedTRecipe = data;
  }


}
