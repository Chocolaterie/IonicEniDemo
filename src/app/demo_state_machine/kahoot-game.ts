export class Reply {

    /**
     * L'intitulé de la réponse
     */
    message : String = "";

    /**
     * Une bonne réponse ?
     */
    isCorrect : boolean = false;

    constructor(_message : String, _isCorrect : boolean){
        this.message = _message
        this.isCorrect = _isCorrect
    }

}

export class Question {

    /**
     * L'intitilé de la question
     */
    message : String = ""
    
    /**
     * La liste des réponses
     */
    replies : Reply[] = [];

}

export class KahootGame {

    /**
     * Score du jeu
     */
    score : number = 0

    /**
     * La liste des questions du jeu
     */
    questions : Question[] = []

    /**
     * Permet de savoir à quelle question je dois répondre
     */
    currentQuestionIndex : number = 0;

    /**
     * Retourne la question actuelle du jeu
     * @returns La question
     */
    getCurrentQuestion() : Question {
        return this.questions[this.currentQuestionIndex];
    }


}