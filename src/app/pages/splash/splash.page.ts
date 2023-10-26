import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements AfterViewInit {
  @ViewChild('cargando') cargando!:ElementRef;
  constructor(
    private router : Router, 
  ) { }
  ngAfterViewInit(): void {
  
  }

  ngOnInit() {
    setTimeout(()=>{
      this.router.navigate(['/home']);
    }, 3000);
  }

}
