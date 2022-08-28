import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesFilterComponent } from './games-filter.component';

describe('GamesFilterComponent', () => {
  let component: GamesFilterComponent;
  let fixture: ComponentFixture<GamesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
