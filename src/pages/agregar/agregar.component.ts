import { Component, OnInit } from '@angular/core';
import { List, Item } from '../../app/classes/index';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  listName:string;
  itemName:string;

  items: Item[] = [];

  constructor() {  }

  ngOnInit() {}

  add() {

    if(this.itemName.length === 0) {
      return;
    } 

    let item = new Item();
    item.name = this.itemName;

    this.items.push(item);

    this.itemName = "";
  }

  removeItem(itemPos:number) {
    console.log("Item pos ", itemPos);
    console.log("Item length ", this.items.length);

    if (this.items.length && this.items.length >= itemPos) {
      console.log("hey");
      this.items.splice(itemPos, 1);
    } else {
       return;
    }

  }
}
