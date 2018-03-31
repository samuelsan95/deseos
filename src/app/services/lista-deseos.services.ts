import { Injectable } from '@angular/core';
import { List } from '../classes/listas';

@Injectable()
export class ListaDeseosService {

  lists: List[] = [];

  constructor() {

    let list1 = new List("Compras de supermercado", false);
    let list2 = new List("Juegos que deseo", false);
    let list3 = new List("Cosas de la uni", false);

    this.lists.push(list1);
    this.lists.push(list2);
    this.lists.push(list3);

    console.log("Servicio inicializado");

  }
}
