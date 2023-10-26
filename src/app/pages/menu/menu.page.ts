import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Listas } from '../../interface/listas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  buttons = [
    { title: "Inicio", route: "/home" },
    { title: "lista", route: "/listas" },
    { title: "Cuenta", route: "/cuenta" },
    { title: "QR", route: "QR" },
    { title: "Notas", route: "/splash" },
    { title: "", route: "" },
    { title: "", route: "" },
    { title: "", route: "" },
    { title: "", route: "" },
    { title: "", route: "" },
    { title: "", route: "" },
    { title: "", route: "" },
  ];
  descripcion: string = '';
  horario: string = '';
  nombre_de_la_clases: string = '';
  constructor(private router: Router, private firestoreService: FirestoreService) {}

  redirigirAPaginaDestino(destino: string) {
    this.router.navigate([destino]);
  }

  ngOnInit() {

  }

  listar() {
    this.firestoreService.listar()
  }

  agregarNuevaLista() {
    const nuevaLista: Listas = {
      descripcion: this.descripcion,
      horario: this.horario,
      nombre_de_la_clases: this.nombre_de_la_clases
    };

    this.firestoreService.grabar(nuevaLista)
      .then((docRef) => {
        console.log('Documento agregado con ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error al agregar documento: ', error);
      });
  }
}