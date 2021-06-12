import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [  

  {
    path: 'page',
    loadChildren: () => import('../../list/list.module').then(m => m.ListModule)
  },

 
 {
    path: 'fichier',
    loadChildren: () => import('../../fichier/fichier/fichier.module').then(m=>m.FichierModule)
  },

 
  {
    path: 'type',
    loadChildren: () => import('../../type/type.module').then(m => m.TypeModule)
  },
  {
    path: 'ajoute-fichier',
    loadChildren: () => import('../../ajoute-fichier/ajoute-fichier.module').then(m => m.AjouteFichierModule)
  },
  {
    path: 'edit-fichier',
    loadChildren: () => import('../../edit-fichier/edit-fichier.module').then(m => m.EditFichierModule)
  },
];
