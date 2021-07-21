import { Component } from '@angular/core';
import { SelectItem } from './select-ttem';
import { Values } from './values';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Resistance Calculator';
  result : string = '';
  values : Values = new Values(1, 1, 0, 10, 5);  
  digits : Array<SelectItem>;
  multipliers : Array<SelectItem>;
  tolerances : Array<SelectItem>;

  constructor(private calculatorService : CalculatorService) {
    this.digits = this.calculatorService.digits;
    this.multipliers = this.calculatorService.multipliers;
    this.tolerances = this.calculatorService.tolerances;
  }

  ngOnInit() {
    this.getResult();
  }

  digitToColor(value) {
    return this.digits.find((i) => i.value === value).color;
  }

  multiplierToColor(value) {
    return this.multipliers.find((i) => i.value === value).color;
  }

  toleranceToColor(value) {
    return this.tolerances.find((i) => i.value === value).color;
  }

  getSquareStyle(color) {
    return {
      'background-color': color === 'none' ? 'transparent' : color,
      'width': '1em',
      'display': 'inline-block'
    };
  }

  getResult() {
    this.calculatorService.getResult(this.values).subscribe(result => this.result = result);
  }

  onChange(newValue) {
    this.calculatorService.getResult(this.values).subscribe(result => this.result = result);
  }
}
