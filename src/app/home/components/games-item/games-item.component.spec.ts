import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesItemComponent } from './games-item.component';

describe('GamesItemComponent', () => {
  let component: GamesItemComponent;
  let fixture: ComponentFixture<GamesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
