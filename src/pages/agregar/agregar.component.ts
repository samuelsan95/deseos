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
}
