import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ListRoutingModule } from "./list-routing.module";

import { from } from 'rxjs';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {EmlpoiService} from './service/emlpoi.service';





@NgModule({
  imports: [
    
    CommonModule,
    ListRoutingModule,
    NgSelectModule ,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ CommonModule],
  declarations: [
    
  
  ],
  providers: [EmlpoiService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
}) 
export class ListModule { }
