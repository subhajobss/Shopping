import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','http://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/a/3a/a3ac2583-4bf3-5a43-b71a-8ae061279d43/555de70049716.image.gif'),
    new Recipe('Recipe2','This is Recipe2','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogKQLDiKxPppc6st0pctrj_n89TobtWmG1o74HzJ3wQBZEwXfew')
  ];
  @Output() onRecipeSelect = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  OnRecipeClick(recipe : Recipe){
    this.onRecipeSelect.emit(recipe);
  }

}
