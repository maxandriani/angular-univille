import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaDetalhesPageComponent } from './receita-detalhes-page.component';

describe('ReceitaDetalhesPageComponent', () => {
  let component: ReceitaDetalhesPageComponent;
  let fixture: ComponentFixture<ReceitaDetalhesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaDetalhesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaDetalhesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
