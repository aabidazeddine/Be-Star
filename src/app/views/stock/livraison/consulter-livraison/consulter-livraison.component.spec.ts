import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterLivraisonComponent } from './consulter-livraison.component';

describe('ConsulterLivraisonComponent', () => {
  let component: ConsulterLivraisonComponent;
  let fixture: ComponentFixture<ConsulterLivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterLivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
