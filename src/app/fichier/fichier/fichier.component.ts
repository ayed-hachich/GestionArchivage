import { Component, OnInit,ViewEncapsulation, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FichierService } from 'app/service/fichier.service';
import { Fichier } from '../../../../api/src/models';
import { Router } from '@angular/router';

import { ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngbd-modal-content',
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
  
  
  
  
                  <div class="alert alert-success Editsucc" role="alert">fichier supprimée avec succès</div>
  
  
  
  
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
      //*****************************fin modal***********************
  
  
  
  
  
  
  
  
  
  
  
  
  





  

@Component({
  selector: 'app-fichier',
  templateUrl: './fichier.component.html',
  styleUrls: ['./fichier.component.scss']
})
export class FichierComponent implements OnInit {

  fichiers : Fichier []
  closeResult: string;


  constructor(private modalService: NgbModal,private router : Router, private fichierService:FichierService) { }
  
  async delete(id:any){
  var tr = document.getElementById(id);
  tr?.remove();

  this.fichierService.deletefichier(id).subscribe(
  (types) => {

  console.log(types)

  }, (error) => {
  alert('Problème d\'accès ');
  console.log(error);

  }

  );
  }



  ngOnInit(): void {
  this.fichierService.getfichier().subscribe(
  (fichiers) => {
  this.fichiers = fichiers ;
  console.log(fichiers)
  }, (error) => {
  alert('Problème d\'accès à l api les données affichées sont fake');
  console.log(error);

  }

  );

  }
  Goto(id:any){
  this.router.navigate(["/edit-fichier"],{
  queryParams:{
  id:id
  }
  })
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

  // Open modal with dark section
  openModal(customContent) {
  this.modalService.open(customContent, { windowClass: 'dark-modal' });
  }

  // Open content with dark section
  openContent() {
  const modalRef = this.modalService.open(NgbdModalContent);
  modalRef.componentInstance.name = 'World';
  }
  }
