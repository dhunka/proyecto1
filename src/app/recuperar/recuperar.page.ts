import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Listo',
      subHeader: 'Revise su gmail para realizar el cambio de contraseÃ±a.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}