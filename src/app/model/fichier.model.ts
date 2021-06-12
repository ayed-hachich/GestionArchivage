export class Fichier {
    id: number;
    nom_fichier: string;
    societe : string;
    type_fichier: string;
    fichier: string;
    extension: string;
    date_installation: string;
    constructor(nom_fichier: string, societe :string, type_fichier : string , id: number,extension:string,fichier:string,date_installation:string ) {
        this.id=id;
        this.nom_fichier = nom_fichier ;
        this.societe = societe;
        this.type_fichier = type_fichier;
        this.fichier = fichier;
        this.extension = extension;
        this.date_installation=date_installation;

      }
    
   
}