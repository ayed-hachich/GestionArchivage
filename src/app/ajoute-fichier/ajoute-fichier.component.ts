import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FichierService } from 'app/service/fichier.service';

import { Fichier } from '../../../api/src/models';

@Component({
  selector: 'app-ajoute-fichier',
  templateUrl: './ajoute-fichier.component.html',
  styleUrls: ['./ajoute-fichier.component.scss']
})
export class AjouteFichierComponent implements OnInit {
  //fichier: Fichier = new Fichier();
  @Input() id: string;
  

 // constructor(private fichierService:FichierService,private router : Router ) { }
 constructor(){}

  ngOnInit(): void {
  }

  
  
  

  

}