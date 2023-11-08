import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-profesores',
  templateUrl: './lista-profesores.page.html',
  styleUrls: ['./lista-profesores.page.scss'],
})
export class ListaProfesoresPage implements OnInit {
  constructor(private router: Router, private firestoreService: FirestoreService) { }

  datosQr1:string="R76jJxAZC7uJQYlQLwG4"
  datosQr2:string="SlhIXg4p7hvXDTGYgdAl"

  ngOnInit() {
    this.cargarItem("1","");
    let btn_verseccion = document.getElementById("btn-verSecciones");
    let ver_qrs = document.getElementById("btn-verQRs");
    let volver1 = document.getElementById("btn-volver-1");
    let volver2 = document.getElementById("btn-volver-2");
    let retroceder = document.getElementById("btn-volver-01");
    let usuario = sessionStorage.getItem('usuario');
    if(usuario !== null) {
      this.cargarSecciones(usuario);
    }
    if(btn_verseccion && ver_qrs && volver1 && volver2 && retroceder) {
      btn_verseccion.addEventListener("click", (event) => {
        if (usuario !== null) { 
          this.cargarItem("2",usuario);
        }
      });
      ver_qrs.addEventListener("click", (event) => {
        this.cargarItem("3","");
      });
      volver1.addEventListener("click", (event) => {
        this.cargarItem("1","");
      });
      volver2.addEventListener("click", (event) => {
        this.cargarItem("1","");
      });
      retroceder.addEventListener("click", (event) => {
        this.volver();
      });
    }
  }

  volver() {
    this.router.navigate(["/menu"]);
  }

  cargarItem(valor:string,usuario:string) {
    let item1 = document.getElementById("item-1");
    let item2 = document.getElementById("item-2");
    let item3 = document.getElementById("item-3");
    if(item1 && item2 && item3) {
      if(valor == "1") {
        item1.style.display = "block";
        item2.style.display = "none";
        item3.style.display = "none";
      } else if(valor == "2") {
        item1.style.display = "none";
        item2.style.display = "block";
        item3.style.display = "none";
        this.cargarSecciones(usuario);
      } else if(valor == "3") {
        item1.style.display = "none";
        item2.style.display = "none";
        item3.style.display = "block";
      }
    }
  }

  cargarSecciones(usuario: string) {
    let tabla = document.getElementById("ion-lista-secciones");
    let cadenaHtml = "";
    this.firestoreService.buscarSecciones(usuario).subscribe((listaSecciones) => {
      cadenaHtml = "";
      listaSecciones.forEach((seccion: any) => {
        cadenaHtml += `
          <ion-item>
            <ion-label>${seccion.seccion}</ion-label>
            <ion-label><a href="../pasar-lista?seccion=${seccion.seccion}"><ion-button expand="full">Ir</ion-button></a></ion-label>
          </ion-item>
        `;
      });
      if (tabla) {
        tabla.innerHTML = cadenaHtml;
      }
    });
  }
}