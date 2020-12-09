import { Component, OnInit } from '@angular/core';
import{ produit } from '../model/produit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {
  [x: string]: any;
currentProduit=new produit();
  constructor(private activatedRoute: ActivatedRoute,
              private produitService: ProduitService,
              private router :Router) { }

  ngOnInit(): void {
// console.log(this.route.snapshot.params.id);
this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot.params.id);
console.log(this.currentProduit);

  }
  updateProduit()
  { //console.log(this.currentProduit);
  this.produitService.updateProduit(this.currentProduit);
  this.router.navigate(["produit"]);
}

}
