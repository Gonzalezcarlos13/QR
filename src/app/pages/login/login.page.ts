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
    if(this.usuario=="profesor" && this.password=="12345") {
      tipoMenu = "menuProfesor";
      sessionStorage.setItem('tipoMenu', tipoMenu);
      this.router.navigate(['/menu']);
    } else if(this.usuario=="alumno" && this.password=="12345") {
      tipoMenu = "menuAlumno";
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