import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditFichierComponent } from './edit-fichier.component';


const routes: Routes = [
  {
    path: '',
    component: EditFichierComponent, 
    data: {
      title: 'edit-fichier'
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
export class EditFichierRoutingModule { }
