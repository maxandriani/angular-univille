import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosPageComponent } from './usuarios-page.component';

describe('UsuariosPageComponent', () => {
  let component: UsuariosPageComponent;
  let fixture: ComponentFixture<UsuariosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
