import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TweetVmVersionPage } from './tweet-vm-version.page';

describe('TweetVmVersionPage', () => {
  let component: TweetVmVersionPage;
  let fixture: ComponentFixture<TweetVmVersionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TweetVmVersionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
