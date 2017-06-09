import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLivraisonComponent } from './liste-livraison.component';

describe('ListeLivraisonComponent', () => {
  let component: ListeLivraisonComponent;
  let fixture: ComponentFixture<ListeLivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeLivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
