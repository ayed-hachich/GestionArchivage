/*export class personne {
    public id : number 
    public NomFr : string
    public  PrenomFr : string
    public NomAr : string
    public  PrenomAr : string
    public Cin : string
    public  CinLiv : Date
    public AdresseFr : string
    public  AdresseAr : string
    public Tel1: string
    public  Tel2 : string
    public Tel3: string
    public  Email : string
    public Login :string
    public Pwd : string
    public Nationalite : number
    public Localite:number
    public Civilite : number
    constructor(){}
    
   
   



}*/
export class personne {
    public id: number;
    public NomFr: string;
    public PrenomFr: string;
    public NomAr: string;
    public PrenomAr: string;
    public Cin: string;
    public CinLiv: string; 
    public AdresseFr: string;
    public AdresseAr: string;
    public Tel1: string;
    public Tel2: string;
    public Tel3: string;
    public Email: string;
    public Login: string;
    public Pwd: string;
    public Nationalite: number;
    public Localite: number;
    public Civilite: number;
    public nature: string;

    constructor() {
    }

    public getId(): number {
        return this.id;
    }
    public setId(value: number) {
        this.id = value;
    }

    public getNomFr(): string {
        return this.NomFr;
    }
    public setNomFr(value: string) {
        this.NomFr = value;
    }

    public getPrenomFr(): string {
        return this.PrenomFr;
    }
    public setPrenomFr(value: string) {
        this.PrenomFr = value;
    }

    public getNomAr(): string {
        return this.NomAr;
    }
    public setNomAr(value: string) {
        this.NomAr = value;
    }

    public getPrenomAr(): string {
        return this.PrenomAr;
    }
    public setPrenomAr(value: string) {
        this.PrenomAr = value;
    }

    public getCin(): string {
        return this.Cin;
    }
    public setCin(value: string) {
        this.Cin = value;
    }

    public getCinLiv(): string {
        return this.CinLiv;
    }
    public setCinLiv(value: string) {
        this.CinLiv = value;
    }

    public getAdresseFr(): string {
        return this.AdresseFr;
    }
    public setAdresseFr(value: string) {
        this.AdresseFr = value;
    }

    public getAdresseAr(): string {
        return this.AdresseAr;
    }
    public setAdresseAr(value: string) {
        this.AdresseAr = value;
    }

   
    
    public getEmail(): string {
        return this.Email;
    }
    public setEmail(value: string) {
        this.Email = value;
    }

    public getLogin(): string {
        return this.Login;
    }
    public setLogin(value: string) {
        this.Login = value;
    }

    public getPwd(): string {
        return this.Pwd;
    }
    public setPwd(value: string) {
        this.Pwd = value;
    }

    public getNationalite(): number {
        return this.Nationalite;
    }
    public setNationalite(value: number) {
        this.Nationalite = value;
    }

    public getLocalite(): number {
        return this.Localite;
    }
    public setLocalite(value: number) {
        this.Localite = value;
    }

    public getCivilite(): number {
        return this.Civilite;
    }
    public setCivilite(value: number) {
        this.Civilite = value;
    }
}