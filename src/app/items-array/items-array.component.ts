import {Component, Input, OnInit} from '@angular/core';

import {FormArray} from '@angular/forms';
import {ItemsValidators} from '../validators';
import {ItemFormControlComponent} from '../item-control/item-control.component';

@Component({
  selector: 'items-array',
  templateUrl: './items-array.component.html',
  styleUrls: ['./items-array.component.css'],
  styles: [':host {display:block;}']
})
export class ItemsFormArrayComponent {

  @Input()
  public itemsFormArray: FormArray;

  addItem() {
    this.itemsFormArray.push(ItemFormControlComponent.buildItem(''));
  }

  static buildItems() {
    return new FormArray([
        ItemFormControlComponent.buildItem('aaa'),
        ItemFormControlComponent.buildItem('')],
      ItemsValidators.minQuantitySum(300));
  }

}
