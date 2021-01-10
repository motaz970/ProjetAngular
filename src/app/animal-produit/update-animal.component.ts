import { Component, OnInit } from '@angular/core';
import{ animal } from '../model/animal.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../services/animal.service';
@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styles: [
  ]
})
export class UpdateAnimalComponent implements OnInit {
  [x: string]: any;
currentAnimal=new animal();
  constructor(private activatedRoute: ActivatedRoute,
              private animalService: AnimalService,
              private router :Router) { }

  ngOnInit(): void {
// console.log(this.route.snapshot.params.id);
this.currentAnimal = this.animalService.consulterAnimal(this.activatedRoute.snapshot.params.id);
console.log(this.currentAnimal);

  }
  updateAnimal()
  { //console.log(this.currentAnimal);
  this.animalService.updateAnimal(this.currentAnimal);
  this.router.navigate(["animal"]);
}

}
