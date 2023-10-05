import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageobeserverPage } from './pageobeserver.page';

describe('PageobeserverPage', () => {
  let component: PageobeserverPage;
  let fixture: ComponentFixture<PageobeserverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageobeserverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
