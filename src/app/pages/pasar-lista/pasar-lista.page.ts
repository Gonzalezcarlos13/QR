import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pasar-lista',
  templateUrl: './pasar-lista.page.html',
  styleUrls: ['./pasar-lista.page.scss'],
})
export class PasarListaPage implements OnInit {

  constructor(private router: Router, private firestoreService: FirestoreService, private actiRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarClases();
  }


  cargarClases() {
    let tabla = document.getElementById("ion-lista-clases");
    let cadenaHtml = "";
    this.actiRoute.queryParams.subscribe(params => {
      let secc = params['seccion'];
      let asigna = ""
      this.firestoreService.cargarClases(secc).subscribe((listaClases) => {
        this.firestoreService.buscarAsignatura(secc).subscribe((nombreAsignatura) => {
          cadenaHtml = "";
          nombreAsignatura.forEach((asignatura: any) => {
            asigna = asignatura.asignatura
          });
          listaClases.forEach((clase: any) => {
            cadenaHtml += `
              <ion-item>
                <ion-label>${clase.numero}</ion-label>
                <ion-label>${asigna}</ion-label>
                <ion-label>${clase.hora}</ion-label>
                <ion-label><a href="../pasar-lista-detalle"><ion-button expand="full">Ir</ion-button></a></ion-label>
              </ion-item>
            `;
          });
          if (tabla) {
            tabla.innerHTML = cadenaHtml;
          }
        });
      });
    });
  }

}
