import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { TitleCasePipe } from '@angular/common';
import { CredenciaisDTO } from '../../models/Credenciais.Dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  }
  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public auth: AuthService
    ) {

  }

  ionViewWillEnter(){
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave(){
    this.menu.swipeEnable(true);
  }

  ionViewDidEnter(){
    this.auth.refreshToken()
    .subscribe(response => {
      this.auth.successfulLogin(response.headers.get('Authorization'));
      this.navCtrl.setRoot('CategoriasPage');
    },
    error => {});
  }

  login(){
    //push = empilhar (com setinha)
    //this.navCtrl.push('CategoriasPage');
    //setroot = sem epilhar (com menu)
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      },
      error => {});
    console.log(this.creds)
    // this.navCtrl.setRoot('CategoriasPage');
  }

  signup(){
    this.navCtrl.push('SignupPage')
  }

}
