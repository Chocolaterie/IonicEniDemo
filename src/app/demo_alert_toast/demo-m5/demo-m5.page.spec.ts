import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoM5Page } from './demo-m5.page';

describe('DemoM5Page', () => {
  let component: DemoM5Page;
  let fixture: ComponentFixture<DemoM5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DemoM5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
