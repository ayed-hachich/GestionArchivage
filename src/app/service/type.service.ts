import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Type } from 'app/model/type.model';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class TypeService {
 Linktype = "http://127.0.0.1:3000/types"
  
  constructor(private http:HttpClient ) { }

  gettype(): Observable<any> {
    return this.http.get<Type[]>(this.Linktype)

  }
  deletetype(id: number ){
    return this.http.delete(this.Linktype + `/${id}` );
  }
  Updatetype(id:number): Observable<any> {
    
    return this.http.put(this.Linktype+ `/${id}` , Number);
  }
  
}
