import { Component, OnInit } from '@angular/core';

import { ListaDeseosService } from '../../app/services/lista-deseos.services';
import { NavController, NavParams } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetailComponent } from "../detail/detail.component";

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(private _listaDeseos : ListaDeseosService, private navCtrl : NavController) {  }

  ngOnInit() {}

  goAgregar() {
    this.navCtrl.push(AgregarComponent);
  }

  showDetail(list, idx) {
    this.navCtrl.push(DetailComponent, { list,idx });
  }

}
