import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionnerLivraisonComponent } from './receptionner-livraison.component';

describe('ReceptionnerLivraisonComponent', () => {
  let component: ReceptionnerLivraisonComponent;
  let fixture: ComponentFixture<ReceptionnerLivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionnerLivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionnerLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
