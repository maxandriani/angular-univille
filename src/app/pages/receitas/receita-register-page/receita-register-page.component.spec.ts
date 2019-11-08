import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaRegisterPageComponent } from './receita-register-page.component';

describe('ReceitaRegisterPageComponent', () => {
  let component: ReceitaRegisterPageComponent;
  let fixture: ComponentFixture<ReceitaRegisterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaRegisterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
