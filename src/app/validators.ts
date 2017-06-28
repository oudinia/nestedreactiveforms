import {AbstractControl} from '@angular/forms';
export class ItemsValidators {

  static minQuantitySum(val: number) {
    return (c: AbstractControl) => {
      let sum = c.value
        .map(item => item.quantity)
        .reduce((acc, cur) => acc + cur, 0);
      if (sum < val) {
        return {minSum: val};
      }
    };
  }
}
