import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tweet } from '../tweet';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweet-page',
  templateUrl: './tweet-page.page.html',
  styleUrls: ['./tweet-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TweetPagePage implements OnInit {

  /**
  * Mes tweets
  */
  tweets: Tweet[] = [];

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    /**
     * Appel API depuis le composant 
     */
    this.tweetService.getData().subscribe(response => {
      this.tweets = response
      console.log(this.tweets);
    })
  }

}
