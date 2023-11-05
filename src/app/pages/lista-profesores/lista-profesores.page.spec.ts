import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaProfesoresPage } from './lista-profesores.page';

describe('ListaProfesoresPage', () => {
  let component: ListaProfesoresPage;
  let fixture: ComponentFixture<ListaProfesoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaProfesoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
