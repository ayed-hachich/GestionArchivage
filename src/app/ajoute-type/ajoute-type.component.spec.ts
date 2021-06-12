import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteTypeComponent } from './ajoute-type.component';

describe('AjouteTypeComponent', () => {
  let component: AjouteTypeComponent;
  let fixture: ComponentFixture<AjouteTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
