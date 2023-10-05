import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TweetViewModel } from '../tweet-view-model';
import { TweetService } from '../tweet.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router'

@Component({
  selector: 'app-tweet-vm-version',
  templateUrl: './tweet-vm-version.page.html',
  styleUrls: ['./tweet-vm-version.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
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

  constructor(private tweetService: TweetService, private router : Router, 
    private route : ActivatedRoute) { 
    // Naviguer sans param
    // this.router.navigateByUrl("/home");

    // Naviguer avec param
    // this.router.navigate(["/home", 10]);

    // Pour récuperer les param de nav quand tu arrive sur la page
    // -- version 1 
    this.route.paramMap.subscribe(params => {
        // exemple recuperer article id
        const articleId = params.get('id')
    })

    // -- version 2
    const articleId = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.vm.callApi()
  }

}
