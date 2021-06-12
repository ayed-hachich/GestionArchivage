import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouteFichierComponent } from './ajoute-fichier.component';


const routes: Routes = [
  {
    path: '',
    component: AjouteFichierComponent, 
    data: {
      title: 'ajoute-fichier'
    }
    // children: [ 
    //   {
    //     path: 'type',
    //     component: TypeComponent,
    //     data: {
    //       title: 'Type'
    //     }
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouteFichierRoutingModule { }
