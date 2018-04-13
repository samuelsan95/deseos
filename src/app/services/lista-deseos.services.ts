import { Injectable } from '@angular/core';
import { List } from '../classes/listas';

@Injectable()
export class ListaDeseosService {

  lists: List[] = [];

  constructor() {

    this.getData();

  }

  updateData() {

    localStorage.setItem( "data", JSON.stringify(this.lists) );

  }

  getData() {

    if (localStorage.getItem( "data" )) {
      this.lists = JSON.parse(localStorage.getItem( "data" ));
    } 
  }

  addList( list:List ) {

    this.lists.push(list);
    this.updateData();

  }

  removeList( idx:number ) {

    this.lists.splice(idx, 1);
    this.updateData();

  }

}
