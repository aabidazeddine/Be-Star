import {Component, OnInit} from '@angular/core';
import {LivraisonService} from "../shared/livraison.service";
import {Livraison} from "../shared/livraison";
@Component({
  selector: 'app-liste-livraison',
  templateUrl: './liste-livraison.component.html',
  styleUrls: ['./liste-livraison.component.css'],
  providers: [LivraisonService]
})
export class ListeLivraisonComponent implements OnInit {
  private listLivraison: Object[];
  private livrason: Livraison;

  constructor(private livraisonService: LivraisonService) {
  }

  ngOnInit() {
    this.listLivraison=[
      {
        "bordereau" : "00213548763",
        "expediteur" : "Entrepôt",
        "numeroExpediteur" : "1684386413",
        "statut" : "En préparation",
        "dateLivraison" : "14/06/2017	",
        "dateReception" : ""
      },
      {
        "bordereau" : "00213548764",
        "expediteur" : "Entrepôt",
        "numeroExpediteur" : "1684386423",
        "statut" : "Expédiée",
        "dateLivraison" : "09/06/2017	",
        "dateReception" : ""
      },
      {
        "bordereau" : "EDY13548764",
        "expediteur" : "PARIS OPÉRA	",
        "numeroExpediteur" : "GDO1345623",
        "statut" : "Expédiée",
        "dateLivraison" : "09/06/2017	",
        "dateReception" : ""
      },
      {
        "bordereau" : "00213548264",
        "expediteur" : "Entrepôt",
        "numeroExpediteur" : "1684386123",
        "statut" : "Réception partielle 10/120	",
        "dateLivraison" : "07/06/2017	",
        "dateReception" : "08/06/2017	Consulter"
      },
      {
        "bordereau" : "002135481231",
        "expediteur" : "Entrepôt",
        "numeroExpediteur" : "1684386112",
        "statut" : "Expédiée",
        "dateLivraison" : "05/06/2017	",
        "dateReception" : ""
      }
    ]

    /*  this.livraisonService.getListLivraison().subscribe(
        list => {
           this.listLivraison = list;
        }
      )
      ;*/
  }
}
