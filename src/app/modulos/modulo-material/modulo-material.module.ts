import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import { NgFor } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatInputModule,
    NgFor,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ]
})
export class ModuloMaterialModule { }
