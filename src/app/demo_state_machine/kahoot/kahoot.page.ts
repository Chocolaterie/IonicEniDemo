import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// ENUMS
/**
 * Les états possibles lors de la préparation d'un KAHOOT
 */
enum KahootState { WAIT_PLAYER_PSEUDO, GAME_PLAY }

/**
 * Les états possibles pendant une partie de jeu
 */
enum GameState { WAIT_QUESTION_REPLY, QUESTION_RESULT, GAME_RESULT }

@Component({
  selector: 'app-kahoot',
  templateUrl: './kahoot.page.html',
  styleUrls: ['./kahoot.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class KahootPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
