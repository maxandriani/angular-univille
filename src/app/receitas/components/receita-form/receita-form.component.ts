import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ReceitaIngredientes } from '../../entities/receita-ingredientes.entity';

@Component({
  selector: 'tda-receita-form',
  templateUrl: './receita-form.component.html',
  styleUrls: ['./receita-form.component.scss']
})
export class ReceitaFormComponent implements OnInit {

  readonly receitaForm = this.fb.group({
    authorId: ['', Validators.required],
    category: ['', Validators.required],
    title: ['', Validators.required],
    excerpt: [''],
    pictureUri:	['', Validators.required],
    serves: [0, Validators.required],
    ingredients: this.fb.array([]),
    // steps: this.fb.array([])
  });

  protected ingredientesARemover: number[] = [];

  constructor(
    protected readonly fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  getIngredientes(): FormArray {
    return this.receitaForm.get('ingredients') as FormArray;
  }

  addIngrediente(input?: Partial<ReceitaIngredientes>) {
    const form = this.fb.group({
      id: [],
      ingredientId: ['', Validators.required],
      amount: [0, Validators.required]
    });

    if (input) {
      form.patchValue(input);
    }

    this.getIngredientes().push(form);
  }

  removeIngrediente(index: number) {
    const formData: Partial<ReceitaIngredientes> = this.getIngredientes().get(index.toString()).value;
    if (formData.id) {
      this.ingredientesARemover.push(formData.id);
    }
    this.getIngredientes().removeAt(index);
  }

  // getSteps(): FormArray {
  //   return this.receitaForm.get('steps') as FormArray;
  // }

}
