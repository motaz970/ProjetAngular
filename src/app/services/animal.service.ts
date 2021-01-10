import { Injectable } from '@angular/core';
import{ animal } from '../model/animal.model';

@Injectable({
  providedIn: 'root'
})
export class Animalservice {
  animals : animal[];
Animal : animal | undefined;
  animal!: animal;
  constructor() { 
    this.animals = [
      {idAnimal : 1, nomAnimal : "rozy", prixAnimal : 3000.600, dateNaissance : new Date("01/14/2011")},
      {idAnimal : 2, nomAnimal : "albert", prixAnimal : 450, dateNaissance: new Date("12/17/2010")},
       {idAnimal : 3, nomAnimal :"rex", prixAnimal : 900.123, dateNaissance: new Date("02/20/2020")}
    ];
  }
listeAnimal():animal[]{
return this.animals;
}
ajouterAnimal(animal : animal ){
this.animals.push(animal);
}
supprimerAnimal( prod: animal){
  //supprimer le animal prod du tableau animals
  const index = this.animals.indexOf(prod, 0);
  if (index > -1) {
  this.animals.splice(index, 1);
  }
  //ou Bien
  /* this.animals.forEach((cur, index) => {
  if(prod.idAnimal === cur.idAnimal) {
  this.animals.splice(index, 1);
  }
  }); */
  }
  consulterAnimal(id:number): animal{
    this.Animal = this.animals.find(p => p.idAnimal == id);
    return this.animal;
    }
    updateAnimal(p:animal)
{
// console.log(p);
this.supprimerAnimal(p);
this.ajouterAnimal(p);
this.trierAnimals();
}
trierAnimals(){
  this.animals = this.animals.sort((n1,n2) => {
  if (n1.idAnimal > n2.idAnimal) {
  return 1;
  }
  if (n1.idAnimal < n2.idAnimal) {
  return -1;
  }
  return 0;
  });
  }
  
}
