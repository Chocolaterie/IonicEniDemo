import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TweetPagePage } from './tweet-page.page';

describe('TweetPagePage', () => {
  let component: TweetPagePage;
  let fixture: ComponentFixture<TweetPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TweetPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
