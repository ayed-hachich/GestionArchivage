import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichierRoutingModule } from './fichier-routing.module';
import { FichierComponent } from './fichier.component';


@NgModule({
  declarations: [FichierComponent],
  imports: [
    CommonModule,
    FichierRoutingModule
  ]
})
export class FichierModule { }
