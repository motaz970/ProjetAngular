import { Component, OnInit } from '@angular/core';
import { ProduitsComponent } from '../produits/produits.component';
import{ produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
 
})
export class AddProduitComponent implements OnInit {
  newProduit = new produit();
message :string;

  constructor(private produitservice : ProduitService) { }

  ngOnInit(): void {
  }
  addProduit(){
  //console.log(this.newProduit);
  this.produitservice.ajouterProduit(this.newProduit);
    this.message="produit "+this.newProduit.nomProduit+"ajouté avec sucés ";
  }
}
