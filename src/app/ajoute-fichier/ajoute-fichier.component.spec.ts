import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteFichierComponent } from './ajoute-fichier.component';

describe('AjouteFichierComponent', () => {
  let component: AjouteFichierComponent;
  let fixture: ComponentFixture<AjouteFichierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteFichierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
