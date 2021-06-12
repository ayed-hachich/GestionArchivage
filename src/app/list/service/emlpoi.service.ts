import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { salle } from '../Model/salle';
import { classe } from '../Model/Classe';


import { anneeScolaire } from '../Model/anneSco';
import { emploidutemps } from '../Model/emploidutemps';
import { enseingant } from '../Model/enseingant';
import { Matiere } from '../Model/Matiere';
import { Trimestre} from '../Model/trimestre';
import { surveillant } from '../Model/surveillant';
import {personne} from '../Model/personne';
import {repartitionexamen} from '../Model/repartitionexamen';


@Injectable({
  providedIn: 'root'
})
export class EmlpoiService {
LinkClasse ="http://localhost:3000/classes"
LinkMatiere ="http://localhost:3000/matieres"
LinkSalle = "http://localhost:3000/salles"
LinkEnseigant ="http://localhost:3000/enseingants"
LinkanneSco = "http://localhost:3000/anneescolaires"
Linkemploidutemps ='http://localhost:3000/emploidutemps'
LinkTrimestre ="http://localhost:3000/trimestres"
LinkSurveillant ="http://localhost:3000/surveillants"
LinkPersonne ="http://localhost:3000/personnes"
LinkRepartitionExamen ="http://localhost:3000/repartitionexamen"
Linkrequete="http://localhost:3000/getData"


  constructor(private http: HttpClient  ) {}
  getSurveillantRequte() : Observable<any[]>{
    return this.http.get<any[]>(this.Linkrequete)
  }
getRepartitionExamen():Observable<repartitionexamen[]>{
  return this.http.get<repartitionexamen[]>(this.LinkRepartitionExamen );}


insert(repartitionexamen :repartitionexamen , idTrimestre:number , idAnneescolaire: number){
  return  this.http.post<any>(this.LinkRepartitionExamen , repartitionexamen +  `/${idTrimestre}` + `/${idAnneescolaire}`)
 }


 getClasse() : Observable<classe[]>{
   return this.http.get<classe[]>('http://localhost:3000/classes')
 }
 getClasseById(id : number):Observable<classe>{
  return this.http.get<classe>(this.LinkClasse + `/${id}`);
 }

 getMatiere() : Observable <Matiere[]> {
 return this.http.get<Matiere[]>('http://localhost:3000/matieres')
 }
 getSalle(): Observable<salle[]> { 
  return this.http.get<salle[]>('http://localhost:3000/salles') 
  
}
getEnseigant(): Observable<enseingant[]> { 
  return this.http.get<enseingant[]>('http://localhost:3000/enseingants') 
  
}
getPersonne(): Observable<personne[]> { 
  return this.http.get<personne[]>(this.LinkPersonne) 
  
}
getSurveillantByidPersonne(): Observable<surveillant []> { 
  return this.http.get<surveillant []>(this.LinkSurveillant+ "?filter[include][]=idpersonne") 
  
}

 getanneScolaire(): Observable<anneeScolaire[]> { 
    return this.http.get<anneeScolaire[]>('http://localhost:3000/anneescolaires') 
    
  }

getemlpoidutemps() :Observable <emploidutemps[]> {
 return this.http.get<emploidutemps[]>(this.Linkemploidutemps+"?filter[include][]=MatiereObj")
}
gettrimestre() :Observable <Trimestre[]> {
  return this.http.get<Trimestre[]>(this.LinkTrimestre)
}
getemploiByClasse(id: number):Observable<emploidutemps[]>{
return this.http.get<emploidutemps[]>(this.Linkemploidutemps+"?filter[include][]=MatiereObj&filter[where][Classe]="+id+"");
} 
//getrepartitionByClasse(id: number):Observable<repartitionexamen[]>{
//  return this.http.get<repartitionexamen[]>(this.LinkRepartitionExamen+"?filter[where][idClasse]="+id+"");
//  } 
getrepartitionByClasse(id: number):Observable<repartitionexamen[]>{
  return this.http.get<repartitionexamen[]>(this.Linkrequete+"?filter[where][idClasse]="+id+"");
  } 




addElement(repartitionexamen:repartitionexamen): Observable<any> {
  console.log(repartitionexamen);
  return this.http.post(this.LinkRepartitionExamen, repartitionexamen);

}
deleteRepartitionexamen(id:number){
  return this.http.delete(this.LinkRepartitionExamen + `/${id}`);
}
updateRepartitionExamen(repartitionexamen: repartitionexamen, id:number){
  return this.http.put<repartitionexamen>(this.LinkRepartitionExamen + `/${id}`, repartitionexamen);
}

}
