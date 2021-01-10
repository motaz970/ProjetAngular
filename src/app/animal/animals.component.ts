import { Component, OnInit } from '@angular/core';
import{ animal } from '../model/animal.model';
import { AnimalService } from '../services/animal.service';
@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
 
})
export class AnimalsComponent implements OnInit {
  animals: animal[];



      constructor(private animalservice : AnimalService) {
       this.animals= animalservice.listeAnimal();
        }
         


  ngOnInit(): void {

  }
   supprimerAnimal(p: animal)
   {
   //console.log(p);
   let conf = confirm("Etes-vous sûr ?");
   if (conf)
   this.animalservice.supprimerAnimal(p);
   }
}
