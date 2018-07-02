import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';
import { LugaresService } from '../../services/lugares.services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lugares:any = [];

  constructor(public navCtrl: NavController, public ls: LugaresService, 
              private alertCtrl: AlertController) {
    this.ls.getLugares().valueChanges().subscribe((LugaresFB) => {
      this.lugares = LugaresFB; 
    });
  }
  irAVistaDetalle(){
    console.log("vista detalle");
    this.navCtrl.push(LugarPage, {lugar: {}});
  }


  irAVistaDetalleExistente(lugar) {
    this.navCtrl.push(LugarPage, {lugar: lugar});
  }

  deleteLugar(lugar) {
    
    let confDg = this.alertCtrl.create({
      title: 'Borrado',
      message: 'Desea borrar?',
      buttons: [
        {
          text: 'Cancel',
          // role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Cancelar clicked');
            return this.ls.deleteLugar(lugar).then(()=>{
              console.log('Eliminado');
            });
          }
        }
      ]
    });
    confDg.present();
  }
}
