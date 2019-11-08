import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientesPageComponent } from './ingredientes-page.component';

describe('IngredientesPageComponent', () => {
  let component: IngredientesPageComponent;
  let fixture: ComponentFixture<IngredientesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
