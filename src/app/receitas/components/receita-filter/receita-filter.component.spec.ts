import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaFilterComponent } from './receita-filter.component';

describe('ReceitaFilterComponent', () => {
  let component: ReceitaFilterComponent;
  let fixture: ComponentFixture<ReceitaFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
