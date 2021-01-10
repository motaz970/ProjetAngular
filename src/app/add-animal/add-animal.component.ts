import { Component, OnInit } from '@angular/core';
import { AnimalsComponent } from '../animals/animals.component';
import{ Animal } from '../model/animal.model';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
 
})
export class AddAnimalComponent implements OnInit {
  newAnimal = new animal();
message :string;

  constructor(private animalservice : AnimalService) { }

  ngOnInit(): void {
  }
  addAnimal(){
  //console.log(this.newAnimal);
  this.animalservice.ajouterAnimal(this.newAnimal);
    this.message="animal "+this.newAnimal.nomAnimal+"ajouté avec sucés ";
  }
}
