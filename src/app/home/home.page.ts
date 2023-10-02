import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

// Classe personne
class Person {
  firstname: String;
  lastname: String;

  constructor(firstname = "", lastname = "") {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

// Une classe article avec un constructeur d'une au manière
class Article {

  constructor(public title : String){}
}

//
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, NgForOf],
})
export class HomePage {

  article = new Article("")

  firstname: String = "Isaac";
  currentPerson = new Person("Pffff", "LeRoi");
  persons : Person[] = [new Person("Vincent", "Lheure"), new Person("Tek", "LaBricole"), new Person("Laurent", "IlRameneLeSucre"), new Person("Laurent", "gular")]

  constructor() {
  }

  onClickTest() {
    // Tester si le firstname change
    this.firstname = "Toto"
    // Ajouter un element dans la liste
    // this.persons.push(new Person("Vincent", "Lheure"))

    // 1er Test : Assigner/Référencer les occurrences d'une liste à un objet
    // En Typescript for let of => instancier temporairement une copie de l'occurence dans le for
    for (let person of this.persons){
      person = this.currentPerson;
    }

  
    // 2eme Test : 
    // En Typescript for i => accès direct à la mémoire
    for (let i = 0; i < this.persons.length; i++){
      this.persons[i] = this.currentPerson;
    }
    
  }
}
