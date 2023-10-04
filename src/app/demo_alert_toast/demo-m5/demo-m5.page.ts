import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-demo-m5',
  templateUrl: './demo-m5.page.html',
  styleUrls: ['./demo-m5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DemoM5Page implements OnInit {

  isAlertOpen : boolean = false;
  isToastOpen : boolean = false;
  errorMessage : String = "Une erreur";
  
  constructor() { }

  ngOnInit() {
  }

  openAlert(isOpen : boolean ) {
    this.isAlertOpen = isOpen;
  }

  openToast(isOpen : boolean ) {
    this.isToastOpen = isOpen;
  }

}
