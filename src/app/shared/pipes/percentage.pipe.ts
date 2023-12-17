import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {
  transform(value: number, total: number): string {
    if (!value || !total || isNaN(value) || isNaN(total) || total === 0) {
      return 'N/A';
    }

    const percentage = (value / total) * 100;
    return `${percentage.toFixed(2)}%`;
  }
}
