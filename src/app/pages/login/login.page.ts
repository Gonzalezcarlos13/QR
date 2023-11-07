import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:string='';
  password:string='';

  constructor(private router: Router, private toastCtrl:ToastController) { }

  ngOnInit() {
  }

  async redirectToMenu() {
    let tipoMenu = ""
    let usuario = ""
    if(this.usuario=="camposo" && this.password=="12345") {
      tipoMenu = "menuProfesor";
      usuario = "R76jJxAZC7uJQYlQLwG4";
      sessionStorage.setItem('usuario', usuario);
      sessionStorage.setItem('tipoMenu', tipoMenu);
      this.router.navigate(['/menu']);
    } else if(this.usuario=="carlos" && this.password=="12345") {
      tipoMenu = "menuAlumno";
      usuario = "71x9PnWT73J2P01pf6aA";
      sessionStorage.setItem('usuario', usuario);
      sessionStorage.setItem('tipoMenu', tipoMenu);
      this.router.navigate(['/menu']);
    } else if(this.usuario=="pavel" && this.password=="12345") {
      tipoMenu = "menuProfesor";
      usuario = "SlhIXg4p7hvXDTGYgdAl";
      sessionStorage.setItem('usuario', usuario);
      sessionStorage.setItem('tipoMenu', tipoMenu);
      this.router.navigate(['/menu']);
    } else {
      let m = this.toastCtrl.create({
        message:"Credenciales Incorrecta",
        duration:1000,
        position:'middle'
      });
      (await m).present();
    }
  }
}