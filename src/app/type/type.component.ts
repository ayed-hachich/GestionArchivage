import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, ViewEncapsulation, Input ,OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Type } from 'app/model/type.model';
import { types } from 'util';
import {TypeService} from '../service/type.service'

@Component({
    selector: 'ngbd-modal-content',
    template: `
    <div class="modal-header">
      <h4 class="modal-title">Ajoute type</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <section id="basic-input">
  <div class="row">

    <div class="col-12">
      <div class="card">
        
        <div class="card-content ">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <form>
                  <fieldset class="form-group">
                    <label for="basicInput">Nom-type</label>
                    <input type="text" class="form-control" id="basicInput" placeholder="nom-type">
                  </fieldset>
                  <button type="button" class="btn btn-primary mr-2"><i class="ft-check-square mr-1"></i>Save</button>
                  
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

    
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
  



})

export class NgbdModalContent {
    @Input() name;
    constructor(public activeModal: NgbActiveModal) { }
}
//component pour edite

@Component({
  selector: 'edite',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Edite type</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
  <section id="basic-input">
<div class="row">

  <div class="col-12">
    <div class="card">
      
      <div class="card-content ">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <form>
                <fieldset class="form-group">
                  <h5>Nom-type</h5>
                  
                  <input type="text" class="form-control" id="basicInput" placeholder="nom-type">
                </fieldset>
                <button type="button" class="btn btn-primary mr-2"><i class="ft-check-square mr-1"></i>Save</button>
                
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

  
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
  </div>
`

})

export class edite {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}
// fin compenent pour edit


// debute compenet delite
@Component({
  selector: 'delite',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Rappel</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
  <section id="basic-input">
<div class="row">

  <div class="col-12">
    <div class="card">
      
      <div class="card-content ">
        <div class="card-body">
          <div class="row">
            
            
                
              
                <div  class="alert alert-success Editsucc" role="alert">type supprimée avec succès</div>
                
              

            
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

  
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
  </div>

`
})

export class delite {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}
// fin compenent pour delite 











@Component({
    selector: 'app-type',
    templateUrl: './type.component.html',
    styleUrls: ['./type.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class TypeComponent implements OnInit  {
  types : Type []
    closeResult: string;

    constructor(private modalService: NgbModal, private TypeService:TypeService) { }
    
    async delete(id:any){
      var tr = document.getElementById(id);
      tr?.remove();
    
      this.TypeService.deletetype(id).subscribe(
        (types) => {
         
          console.log(types)
        }, (error) => {
          alert('Problème d\'accès ');
          console.log(error);
  
        }
  
    );
     
     
    }

    ngOnInit(): void {
      this.TypeService.gettype().subscribe(
        (types) => {
          this.types = types ;
          console.log(types)
        }, (error) => {
          alert('Problème d\'accès à l api les données affichées sont fake');
          console.log(error);
  
        }
  
    );

    }










    // Open default modal
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    // This function is used in open
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    

 
    openContent() {
      
      const modalRef = this.modalService.open(NgbdModalContent);
     
  }
  // Open content with dark section
  openContentedite() {
      
    const modalRef = this.modalService.open(edite,{ windowClass: 'dark-modal' });
    
}
openContentdelite() {
      
  const modalRef = this.modalService.open(delite);
  
}

}



