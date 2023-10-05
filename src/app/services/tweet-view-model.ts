import { Tweet } from "./tweet";
import { TweetService } from "./tweet.service";
import { BehaviorSubject, Observable, Subject, Subscriber, interval } from 'rxjs';

export class TweetViewModel {

    /**
     * Emetteur
     */
    private dataSubject = new BehaviorSubject<any>(null);

    constructor(private tweetService: TweetService) {
    }

    /**
     * Appel API depuis un ViewModel
     */
    callApi() {
        this.tweetService.getData().subscribe(response => {
            this.dataSubject.next(response)
        })
    }

    get data$(): Observable<any> {
        return this.dataSubject.asObservable();
    }
}