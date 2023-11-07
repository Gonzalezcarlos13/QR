import { Injectable } from '@angular/core';
///////////////////////////libreria
import { Alumnos } from '../interface/alumnos';
//import { Profesores } from '../interface/profesores';
import{AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs: AngularFirestore) { }

  listarAlumnos(): Observable<any[]> {
    return this.afs.collection('Alumnos').valueChanges();
  }

  listarAsistencia(): Observable<any[]> {
    return this.afs.collection('Asistencias').snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  buscarAlumno(id: string): Observable<Alumnos | undefined> {
    return this.afs
      .collection('Alumnos')
      .doc(id)
      .get()
      .pipe(
        map((doc) => {
          if (doc.exists) {
            const data = doc.data() as Alumnos;
            return data;
          } else {
            console.log("El documento no existe.");
            return undefined;
          }
        })
      );
  }

  buscarSecciones(usuario: string) {
    return this.afs.collection('Seccion', ref => ref.where('profesor', '==', usuario)).valueChanges();
  }

  grabar(nuevaLista: Alumnos){
    return this.afs.collection('Alumnos').add(nuevaLista);
  }
}