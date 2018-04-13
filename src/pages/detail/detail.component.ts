import { ListaDeseosService } from './../../app/services/lista-deseos.services';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from "ionic-angular";
import { List, Item } from "../../app/classes/index";


@Component({
    selector: 'app-detail',
    templateUrl: 'detail.component.html',
})
export class DetailComponent implements OnInit {
    
    idx:number;
    list:any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public _listaDeseos: ListaDeseosService,
                public alertCtrl: AlertController) {

                    this.idx = navParams.get("idx");
                    this.list = navParams.get("list");

                 }

    ngOnInit() {}

    updateItem(item:Item) {
        item.complete = !item.complete;

        let allComplete = true;

        for (let item of this.list.items) {
            if(!item.complete) {
                allComplete = false;
                break;
            }
        }

        this.list.finish = allComplete;
        this._listaDeseos.updateData();
    }

    deleteItem() {
        let alert = {
            title: 'Borrar lista ' + this.list.name,
            message: '¿Está seguro de querer eliminar esta lista?',
            type:'remove',
        }
        this.showConfirm(alert, this.idx);
    }

    showConfirm(alert:any, idx:number) {
        let confirm = this.alertCtrl.create({
          title: alert.title,
          message: alert.message,
          buttons: ['Cancelar',
            {
              text: 'Eliminar',
              handler: () => {
                if (alert.type === 'remove') {
                  this._listaDeseos.removeList(idx);
                  this.navCtrl.pop();
                }
              }
            }
          ]
        });
        confirm.present();
      }
}
