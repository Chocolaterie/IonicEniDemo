import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { KahootGame, Question, Reply } from '../kahoot-game';

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

  /**
   * L'état actuel du kahoot
   */
  currentKahootState : KahootState = KahootState.WAIT_PLAYER_PSEUDO;

  /**
   * Wtf ? Ca sert uniquement à aider le html à reconnaitre le type de l'enum
   */
  KahootState = KahootState;

  /**
   * L'etat actuel de l'instance actuelle du jeu
   */
  currentGameState : GameState = GameState.WAIT_QUESTION_REPLY;

  /**
   * Wtf encore ? Ca sert uniquement à aider le html à reconnaitre le type de l'enum
   */
  GameState = GameState;


  /**
   * 
   * ! => Pour l'instant il est pas instancié, 
   * mais on est obligé de le faire nous même à un moment
   * ATTENTION : Vous prenez le risque d'avoir un nullptr si vous oubliez de l'instancier
   */
  kahootGame! : KahootGame;

  constructor() { }

  ngOnInit() {
    // Instancier par défaut un jeu vide
    this.kahootGame = new KahootGame();
  }

  /**
   * Lancer la partie
   */
  startGame(){
    // Option 1 : Reset tout l'objet
    this.kahootGame = new KahootGame();

    // Option 2 : Clear à la main
    // this.kahootGame.currentQuestionIndex = 0;
    // this.kahootGame.score = 0;

    // Je lance un jeu avec des questions
    // -- Alimentation de fausse données
    let question1 = new Question()
    question1.message = "Quel est le pire Beurre de France ?"
    question1.replies = [new Reply("Beurre Doux", false), new Reply("Beurre Salé", true)];

    let question2 = new Question()
    question2.message = "Vincent veut partir à 14h Vendredi ?"
    question2.replies = [new Reply("Non il veut rester à 18h", false), new Reply("Ouais mais il veut partir à 14h01", true)];

    this.kahootGame.questions = [question1, question2]

    // Je change l'etat du Kahoot à GAMPE_PLAY
    // Donc je lance la partie, je suis en pleine partie
    this.currentKahootState = KahootState.GAME_PLAY
    this.currentGameState = GameState.WAIT_QUESTION_REPLY
  }

  /**
   * Lorsque je selectionne une réponse
   */
  onClickReply(reply: Reply){
    // Si la réponse en question est correcte = ajout de point 
    if (reply.isCorrect){
      // Todo : un Toast qui affiche "Correcte"
      // On à gagné 1 point
      this.kahootGame.score += 1
    }

    // Est-ce que la partie est terminé (toute les questions ont été traitées)
    if (this.kahootGame.currentQuestionIndex + 1 >= this.kahootGame.questions.length){
      // Pour l'instant changer l'etat : La partie est terminée
      this.currentGameState = GameState.GAME_RESULT;
    }
    else {
      // Je change l'état à : Afficher le résultat de la question actuelle (ou bonne réponse)
      this.currentGameState = GameState.QUESTION_RESULT
    }

  }

  /**
   * Lorsqu'on clique sur le bouton "Question Suivante"
   */
  onClickNextQuestion(){
    // Est-ce que la partie est terminé (toute les questions ont été traitées)
    if (this.kahootGame.currentQuestionIndex + 1 >= this.kahootGame.questions.length){
      // Pour l'instant changer l'etat : La partie est terminée
      this.currentGameState = GameState.GAME_RESULT;
    }
    else {
      // Increment l'index pour avoir la question suivante
      this.kahootGame.currentQuestionIndex ++;
      // Repasser à l'etat attendre les réponses
      this.currentGameState = GameState.WAIT_QUESTION_REPLY;
    }
  }

  /**
   * Lorsqu'on clique sur le bouton "Quitter"
   */
  onClickQuitGame(){
    // Repasser l'état du kahoot global : Entrer le pseudo/Préparation
    this.currentKahootState = KahootState.WAIT_PLAYER_PSEUDO;
  }

  onClickRestart(){
    this.startGame();
  }
}
