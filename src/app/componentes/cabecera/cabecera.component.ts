import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent  implements OnInit {

  @Input() imagen:string='';
  @Input() titulo:string='';
  @Input() descripcion:string='';

  constructor() { }

  ngOnInit() {}

}
