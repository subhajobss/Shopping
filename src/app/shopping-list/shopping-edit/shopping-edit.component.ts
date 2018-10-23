import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  @Output() ingredientAdded = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const nameInput =  this.nameInputRef.nativeElement.value;
    const amountInput = this.amountInputRef.nativeElement.value;  
    this.ingredientAdded.emit(new Ingredient(nameInput,amountInput));
  }
}
