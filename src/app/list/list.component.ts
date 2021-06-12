import { Component,  OnInit} from '@angular/core';
import { NgbDateStruct, NgbDatepickerI18n, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import {EmlpoiService} from './service/emlpoi.service';
import {Trimestre} from './Model/trimestre';
import {anneeScolaire} from './Model/anneSco';
import {classe} from './Model/Classe';
import { emploidutemps} from './Model/emploidutemps';
import {salle} from './Model/salle';
import {surveillant} from './Model/surveillant';
import { personne} from './Model/personne';
import {repartitionexamen} from './Model/repartitionexamen';
import swal from 'sweetalert2';
import {Router} from '@angular/router';







@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent   {
  AnneeScolaire : anneeScolaire = new anneeScolaire();
  AnneeScolaires: anneeScolaire[];
  default_value: boolean;
  Trimestre :Trimestre =new Trimestre();
  Trimestres : Trimestre[];
  classe : classe[];
  salle: salle[];
  surveillant : surveillant[];
  personne: personne[];
  emploidutempss: emploidutemps[];
  emploidutemps: emploidutemps;
  repartitionexamen  = new repartitionexamen;
  repartitionexamens : repartitionexamen [];

  
  id:number;
  idAnneescolaire:number;
  idTrimestre:number;
  heureDeb:number;
  heureFin:number;
  duree:number;
  
  config: any;
  matieres=[];
  
 constructor(private emploiService:EmlpoiService , private router:Router){
 
 }
 ngOnInit(): void {
  this.repartition();
  this.getSurveillantRequte();
  this. onChange(this.id);
 



 
this.emploiService.getanneScolaire().subscribe(
(AnneeScolaire) => {
    this.AnneeScolaires = AnneeScolaire;
 
 }, (error) => {   
     console.log(error);
  }
    

);
this.emploiService.getanneScolaire().subscribe (
  response => {
    this.AnneeScolaires = response;
    this.AnneeScolaire = this.AnneeScolaires.find(item => item.id === 2   );
    
  }

);
this.emploiService.gettrimestre().subscribe(
  (Trimestre ) => {
      this.Trimestres = Trimestre ;
  }, (error) => {
       console.log(error);

  }

);
this.emploiService.gettrimestre().subscribe (
  response => {
    this.Trimestres = response;
    this.Trimestre = this.Trimestres.find(item => item.id === 1 );
    
  }

);
this.emploiService.getClasse().subscribe(
  (classe ) => {
      this.classe= classe ;
  }, (error) => {
       console.log(error);

  }

);
this.emploiService.getSalle().subscribe(
  (salle ) => {
      this.salle= salle;
  }, (error) => {
       console.log(error);

  }

);
this.emploiService.getPersonne().subscribe(
  (personne ) => {
      this.personne= personne;
  }, (error) => {
       console.log(error);

  }

);
this.emploiService.getSurveillantByidPersonne().subscribe(
  (surveillant ) => {
      this.surveillant= surveillant;
      console.log(this.surveillant)
  }, (error) => {
       console.log(error);

  }

);
 
   
  }
//  Calculduree(){
//this.duree=this.heureFin-this.heureDeb;
//  }


  
 
  onChange(id:number){
   this.emploiService.getemploiByClasse(id).subscribe((response)=>{
    this.emploidutempss= response;
     console.log(response);
     
    },
    (error)=>{
      console.log(error);
    }

  );
this.emploiService.getrepartitionByClasse(id).subscribe((response)=>{
  this.repartitionexamens= response;
   console.log(response);
   
  },
  (error)=>{
    console.log(error);
  }
  );
  }
 

repartition(){
  this.emploiService.getRepartitionExamen().subscribe(
    (response: repartitionexamen [])=>{
    this.repartitionexamens=response;
    
  console.log(response);
  },
   (error)=>{
   console.log(error);
  }
  );
}
getSurveillantRequte() {
    
  this.emploiService.getSurveillantRequte().subscribe(
    response => {
   
      this.repartitionexamens = response;

    }

  );

}

enregistrer(){
  
  this.emploiService.insert(this.repartitionexamen , this.idTrimestre , this.idAnneescolaire).
  subscribe(

 data=>{

   console.log(data);
 
 },


err => {
 console.log(err)

    
},);

}


supprimerRepartition(id:number){
  this.emploiService.deleteRepartitionexamen(id).subscribe(
    (response)=>{
     
      const index=this.repartitionexamens.findIndex(item=>item.id===id)
      this.repartitionexamens.splice(index,1);
      swal.fire({
        icon: 'success',
        title: 'Suppression Etablissement a été  effectuée avec sucées',
        showConfirmButton: false,
        timer: 1500
    })
    },
    (error)=>{
      console.log(error);
    }
  )
}

onEdit(){
 this.emploiService.updateRepartitionExamen(this.repartitionexamen,this.id)
 .subscribe(
   data=>{
     console.log(data);  
    },
    err => {
     console.log(err)     
 },);

}






//Add(){
//
// this.emploiService.addElement(this.repartitionexamen).subscribe(
//    (response) => {
//       this.repartitionexamens.push(response);
//   
//       swal.fire({
//           icon: 'success',
//           title: 'Enregistrement a été  effectuée avec sucées',
//           showConfirmButton: false,
//           timer: 1500
//       })
//   
//   },
//   (error) => {
//   console.log(error);   
//    }
//    )
//}
      

   



    selectedMatiere: any;

title = 'الفترة المغلقة للثلاثي الأول '; 

d1: any;

model: NgbDateStruct;
date: {year: number, month: number};
  displayMonths = 2;
  navigation = 'select';
  customModel: NgbDateStruct;

  configModal;

time: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
heuredeb1:NgbTimeStruct ;
heurefin1: NgbTimeStruct  ;







}
