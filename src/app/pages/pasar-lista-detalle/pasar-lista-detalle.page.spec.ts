import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasarListaDetallePage } from './pasar-lista-detalle.page';

describe('PasarListaDetallePage', () => {
  let component: PasarListaDetallePage;
  let fixture: ComponentFixture<PasarListaDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PasarListaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
