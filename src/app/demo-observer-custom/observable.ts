class Observable {

    observers : Observer[] = [];
    
    /**
     * Envoyer un signal à tout les observer
     */
    emitBroadcast() {
        for (let observer of this.observers){
            observer.onReceiveBroadcast();
        }
    }

    /**
     * S'abonner
     * @param observer 
     */
    subscribe(observer : Observer) {
        this.observers.push(observer)
    }
}