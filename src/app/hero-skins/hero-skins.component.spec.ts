import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSkinsComponent } from './hero-skins.component';

describe('HeroSkinsComponent', () => {
  let component: HeroSkinsComponent;
  let fixture: ComponentFixture<HeroSkinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSkinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
