import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailComponent } from "../detail/detail.component";
import { ListaDeseosService } from "../../app/services/lista-deseos.services";

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {
  constructor(private _listaDeseos : ListaDeseosService,
              public navCtrl:NavController) {  }

  ngOnInit() {}

  showDetail(list, idx) {
    this.navCtrl.push(DetailComponent, { list,idx });
  }
}
