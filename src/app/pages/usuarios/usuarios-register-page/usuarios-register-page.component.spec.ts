import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosRegisterPageComponent } from './usuarios-register-page.component';

describe('UsuariosRegisterPageComponent', () => {
  let component: UsuariosRegisterPageComponent;
  let fixture: ComponentFixture<UsuariosRegisterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosRegisterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
