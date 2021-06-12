import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fichier } from '../model/fichier.model';

@Injectable({
  providedIn: 'root'
})

  export class FichierService {
    Linkfichier = "http://127.0.0.1:3000/fichiers"
     
     constructor(private http:HttpClient ) { }
   
     getfichier(): Observable<any> {
       return this.http.get<Fichier[]>(this.Linkfichier)
   
     }
     
    postfichier (fichier: Fichier){
     return this.http.post(this.Linkfichier, fichier);
    }
     deletefichier(id: number ){
       return this.http.delete(this.Linkfichier + `/${id}` );
     }

    // Updatefichier(fichier: Fichier, id: number){
    //  return this.http.put(this.Linkfichier+`/${id}`,fichier);
    //}
    //getfichierid(id:string){
    //  return this.http.get(this.Linkfichier+`/${id}`);
  //  }
    
     
   }
  
