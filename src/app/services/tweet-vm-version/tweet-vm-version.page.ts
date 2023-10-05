import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TweetViewModel } from '../tweet-view-model';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweet-vm-version',
  templateUrl: './tweet-vm-version.page.html',
  styleUrls: ['./tweet-vm-version.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TweetVmVersionPage implements OnInit {

  /**
  * ViewModel
  */
  vm: TweetViewModel = new TweetViewModel(this.tweetService);

  /**
   * Les tweets sont auto synchronisé en temps réel avec le viewmodel
   */
  tweets$ = this.vm.data$;

  constructor(private tweetService: TweetService) { 
  }

  ngOnInit() {
    this.vm.callApi()
  }

}
