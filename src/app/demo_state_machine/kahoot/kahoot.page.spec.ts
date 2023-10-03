import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KahootPage } from './kahoot.page';

describe('KahootPage', () => {
  let component: KahootPage;
  let fixture: ComponentFixture<KahootPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KahootPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
