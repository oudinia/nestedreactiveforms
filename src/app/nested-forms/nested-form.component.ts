import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ItemsFormArrayComponent} from '../items-array/items-array.component';

@Component({
  selector: 'nested-form',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="submit()">
      <h4>Form</h4>
      <hr>
      <items-array
        formArrayName="items"
        [itemsFormArray]="myForm.get('items')">
      </items-array>
      <hr>
      <div class="form-group">
        <input type="submit" class="form-control" value="Submit" [disabled]="myForm?.invalid">
      </div>
    </form>

    <h6 class="mt-3">FormGroup Model (<code>myForm.value</code>)</h6>
    <div>
      <pre><code>{{ myForm?.value | json }}</code></pre>
    </div>
  `
})
export class NestedFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // build the form model
    this.myForm = this.fb.group({
      items: ItemsFormArrayComponent.buildItems()
    });
  }

  submit() {
    console.log("Reactive Form submitted: ", this.myForm)
  }
}
