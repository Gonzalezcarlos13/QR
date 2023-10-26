import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage implements OnInit {

  constructor() { }

  datosQr:string="{ID:01,idprofe:008,hora:15:20,fecha:10-10-2023}"
  ngOnInit() {
  }

}
