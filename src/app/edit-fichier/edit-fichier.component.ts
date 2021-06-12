import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fichier } from 'app/model/fichier.model';
import { FichierService } from 'app/service/fichier.service';

@Component({
  selector: 'app-edit-fichier',
  templateUrl: './edit-fichier.component.html',
  styleUrls: ['./edit-fichier.component.scss']
})
export class EditFichierComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  //nom_fichier:string
  //societe:string
  //type_fichier:string
  //fichier:string
  //extension:string
  //date_installation:string

  //id:any;
  //constructor(private router: ActivatedRoute ,private fichierService:FichierService ) { 
    
  //}
  constructor(){}

  
  //EditProduct(){}
  //async ngOnInit(){
    //this.router.queryParams.subscribe(async params=>{
    //  this.id=params["id"];
     // this.fichierService.getfichierid(this.id).subscribe(
       // (fichiers) => {
          
        //  this.nom_fichier=fichiers[0].nom_fichier;
       // this.societe=fichiers[0].societe;
       // this.type_fichier=fichiers[0].type_fichier;
        //this.fichier=fichiers[0].fichier;
        //this.extension=fichiers[0].extension;
        //this.date_installation=fichiers[0].date_installation;
         // console.log(fichiers)
       // }, (error) => {
        //  alert('Problème d\'accès à l api les données affichées sont fake');
        //  console.log(error);
  
       // }
  
   // );
      
    
    
 // }

 
  //)}
 // getnom_fichier(){
   // return this.nom_fichier;
     // }
    //  getsociete(){
    //return this.societe;
    //  }
     // getextension(){
   // return this.extension;
      //}
     // getfichier(){
      //  return this.fichier;
         // }
        //  getdate(){
            //return this.date_installation;
            //  }
             // gettype(){
               // return this.type_fichier;
                 // }
}
