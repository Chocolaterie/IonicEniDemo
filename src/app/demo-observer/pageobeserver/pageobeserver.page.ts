import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Observable, Subject, Subscriber, interval } from 'rxjs';


@Component({
  selector: 'app-pageobeserver',
  templateUrl: './pageobeserver.page.html',
  styleUrls: ['./pageobeserver.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PageobeserverPage implements OnInit {
    
  // Observable / Emetteur
  observable! : Subject<number>;
  
  constructor() {
    // Je creer un observable (emetteur)
    this.observable = new Subject();

    // Observer 1 / Ecouteur
    const observer1 = {
      next: (x : any) => {
       alert("Signal récu avec " + x)
      },
      error: (err : any) => {
        console.error('something wrong occurred: ' + err);
      },
      complete : () => {
        console.log('done');
      },
    }
    
    // Obserber 2 / Ecouteur
    const observer2 = {
      next: (x : any) => {
        console.log("Signal récu avec " + x)
      }
    }

    // 1 Observer (ajouter l'observer a la liste des observer dans l'observable )
    this.observable.subscribe(observer1);

    // 2eme Observer (ajouter l'observer a la liste des observer dans l'observable )
    this.observable.subscribe(observer2);

  }

  ngOnInit() {
  }

  onClickEmitEvent(){
    // J'emet un signal next
    this.observable.next(10)
    // les autres signaux
    /*
    this.observable.error(10)
    this.observable.complete()
    */
  }

}
