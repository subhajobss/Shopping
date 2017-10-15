import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogKQLDiKxPppc6st0pctrj_n89TobtWmG1o74HzJ3wQBZEwXfew'),
    new Recipe('Recipe2','This is Recipe2','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogKQLDiKxPppc6st0pctrj_n89TobtWmG1o74HzJ3wQBZEwXfew')
  ];
  constructor() { }

  ngOnInit() {
  }

}
