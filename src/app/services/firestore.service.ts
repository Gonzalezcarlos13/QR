import { Injectable } from '@angular/core';
///////////////////////////libreria
import { Listas } from '../interface/listas';
import{AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs: AngularFirestore) { }

  listar(){
    return this.afs.collection('listas').valueChanges().subscribe(
      (resp)=>{
        console.log("OK");
        //console.log(resp);
      }
    )
  }
  grabar(nuevaLista: Listas){
    return this.afs.collection('listas').add(nuevaLista);
  }
}