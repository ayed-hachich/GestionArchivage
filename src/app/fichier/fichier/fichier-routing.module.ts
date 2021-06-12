import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FichierComponent } from './fichier.component';

const routes: Routes = [
  {
    path: '',
    component: FichierComponent, 
    data: {
      title: 'fichier'
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
  exports: [RouterModule]
})
export class FichierRoutingModule { }
