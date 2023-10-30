import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.page.html',
  styleUrls: ['./lista-alumnos.page.scss'],
})
export class ListaAlumnosPage implements OnInit {
  lista!: any[];
  lista2!: any[];

  constructor(private firestoreService: FirestoreService, private router: Router) { }

  ngOnInit() {
    let btn_volver = document.getElementById("btn-volver");
    if(btn_volver) {
      btn_volver.addEventListener("click", (event) => {
        this.volver();
      });
    }
    this.listar();
  }

  volver() {
    this.router.navigate(["/menu"]);
  }

  listar() {
    let tabla = document.getElementById("ion-lista-alumnos");
    let cadenaHtml = ""
    let porcentaje = 0.0;
    this.firestoreService.listarAsistencia().subscribe((listaAsistencia) => {
      cadenaHtml = ""
      this.lista = listaAsistencia;
      let asistidos = 0;
      let clasesTotales = 0;
      for (let i = 0; i < this.lista.length; i++) {
        let idAsistencia = this.lista[i].id;
        let alumno = this.lista[i].alumno;
        let alumnoAsistido = this.lista[i].asistido ? "Si" : "No";
        let opcionesFormato = { year: 'numeric', month: 'numeric', day: 'numeric' };
        let fecha = this.lista[i].fecha_clase.toDate().toLocaleString(undefined, opcionesFormato);
        if(alumno && alumno == "71x9PnWT73J2P01pf6aA") {
          clasesTotales++;
          this.firestoreService.buscarAlumno(alumno).subscribe((alumnoEncontrado) => {
            if (alumnoEncontrado) {
              console.log("idAsistencia:", idAsistencia,"\nFecha:", fecha, "\nAlumno:", alumnoEncontrado.nombre, alumnoEncontrado.apellido, "\nAsistió?:", alumnoAsistido);
              cadenaHtml += "<ion-item><ion-label>"+idAsistencia+"</ion-label><ion-label>"+fecha+"</ion-label><ion-label>"+alumnoEncontrado.nombre+" "+alumnoEncontrado.apellido+"</ion-label><ion-label>"+alumnoAsistido+"</ion-label></ion-item>";
              if(alumnoAsistido == "Si") {
                asistidos++;
              }
            } else {
              console.log("No se encontraron datos para el alumno:", alumno);
            }
            porcentaje = (asistidos / clasesTotales) * 100;
            if(tabla) {
              tabla.innerHTML = cadenaHtml;
            }
          });
        }
      }
      setTimeout(function() {
        if(tabla) {
          tabla.innerHTML = cadenaHtml+"<ion-item><ion-label>Porcentaje de asistencia: "+porcentaje+"%</ion-label><ion-label>";
        }
      }, 800);
    });
  }
}