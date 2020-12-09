import { Component, OnInit } from '@angular/core';
import{ produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
 
})
export class ProduitsComponent implements OnInit {
  produits: produit[];



      constructor(private produitservice : ProduitService) {
       this.produits= produitservice.listeProduit();
        }
         


  ngOnInit(): void {

  }
   supprimerProduit(p: produit)
   {
   //console.log(p);
   let conf = confirm("Etes-vous sûr ?");
   if (conf)
   this.produitservice.supprimerProduit(p);
   }
}
