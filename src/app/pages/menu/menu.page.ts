import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  buttons: { title: string, route: string }[] = [];
  descripcion: string = '';
  horario: string = '';
  nombre_de_la_clases: string = '';
  constructor(private router: Router, private firestoreService: FirestoreService) {}

  redirigirAPaginaDestino(destino: string) {
    this.router.navigate([destino]);
  }

  ngOnInit() {
    this.cargarBotones();
  }

  cargarBotones() {
    if (sessionStorage.getItem('tipoMenu') == "menuProfesor") {
      this.buttons = [
        { title: "Inicio", route: "/home" },
        { title: "Iniciar clase", route: "/lista-profesores" },
        { title: "Cuenta", route: "/cuenta" },
        { title: "QR", route: "codigo-qr" },
        { title: "Notas", route: "/splash" },
        { title: "Salir", route: "/login" },
        { title: "", route: "" },
        { title: "", route: "" },
        { title: "", route: "" },
        { title: "", route: "" },
        { title: "", route: "" },
        { title: "", route: "" },
      ];
    } else if(sessionStorage.getItem('tipoMenu') == "menuAlumno") {
      this.buttons = [
        { title: "Inicio", route: "/home" },
        { title: "Lista alumno", route: "/lista-alumnos" },
        { title: "Cuenta", route: "/cuenta" },
        { title: "QR", route: "codigo-qr" },
        { title: "Notas", route: "/splash" },
        { title: "Salir", route: "/login" },
        { title: "", route: "" },
        { title: "", route: "" },
        { title: "", route: "" },
        { title: "", route: "" },
        { title: "", route: "" },
        { title: "", route: "" },
      ];
    } else {
      this.buttons = [
        { title: "", route: "" },
        { title: "", route: "" },
        { title: "", route: "" },
        { title: "", route: "" },
      ];
    }
  }
/*
  agregarNuevaLista() {
    const nuevaLista: Alumno = {
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
*/
}