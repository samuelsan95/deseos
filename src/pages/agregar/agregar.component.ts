import { Component, OnInit } from '@angular/core';
import { List, Item } from '../../app/classes/index';
import { AlertController,  NavController } from 'ionic-angular'
import { ListaDeseosService } from '../../app/services/lista-deseos.services'

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  listName:string = "";
  itemName:string;

  items: Item[] = [];

  constructor(public alertCtrl: AlertController,
              public navCtrl: NavController,
              public _listaDeseos: ListaDeseosService) {  }

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

    if (this.items.length && this.items.length >= itemPos) {
      console.log("hey");
      this.items.splice(itemPos, 1);
    } else {
       return;
    }

  }

  saveList() {

    if(this.listName.length === 0) {
      let title = 'Algo ha fallado!';
      let subtitle = 'Es necesario poner un nombre a la lista.';

      this.showAlert(title, subtitle);

      return;
    } 

    let list = new List ( this.listName );
    list.items = this.items;

    this._listaDeseos.lists.push( list );

    this.navCtrl.pop();

  }

  showAlert(title:string, subtitle:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }
}
