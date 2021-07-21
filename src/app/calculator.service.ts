import { Values } from "./values";
import { Injectable } from '@angular/core';
import { SelectItem } from "./select-ttem";
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root', })
export class CalculatorService {
  getResult(values: Values) : Observable<string> {
    let sum = (values.digit1 * 100 + values.digit2 * 10 + values.digit3) * values.multiplier;

    let suffix : string = '';
    let suffixes = ['', 'K', 'M', 'G', 'T'];
    for (let i = 0; i < suffixes.length; i++) {
      let pow = Math.pow(10, (3 * i));
      if (sum / pow >= 1 && sum / pow < 1000) {
        suffix = suffixes[i];        
        sum = sum / pow;    
      }
    }
    return of(`${sum}${suffix} +/- ${values.tolerance}%`);
  }

  digits : Array<SelectItem> = [
    {value: 0, name: 'black (0)', color: 'black'},
    {value: 1, name: 'brown (1)', color: 'brown'},
    {value: 2, name: 'red (2)', color: 'red'},
    {value: 3, name: 'orange (3)', color: 'orange'},
    {value: 4, name: 'yellow (4)', color: 'yellow'},
    {value: 5, name: 'green (5)', color: 'green'},
    {value: 6, name: 'blue (6)', color: 'blue'},
    {value: 7, name: 'violet (7)', color: 'violet'},
    {value: 8, name: 'grey (8)', color: 'grey'},
    {value: 9, name: 'white (9)', color: 'white'},
  ];
  multipliers : Array<SelectItem> = [
    {value: 0.01, name: 'silver (x0.01)', color: 'silver'},
    {value: 0.1, name: 'gold (x0.1)', color: 'gold'},
    {value: 1, name: 'black (x1)', color: 'black'},
    {value: 10, name: 'brown (x10)', color: 'brown'},
    {value: 100, name: 'red (x100)', color: 'red'},
    {value: 1000, name: 'orange (x1K)', color: 'orange'},
    {value: 10000, name: 'yellow (x10K)', color: 'yellow'},
    {value: 100000, name: 'green (x100K)', color: 'green'},
    {value: 1000000, name: 'blue (x1M)', color: 'blue'},
    {value: 10000000, name: 'violet (x10M)', color: 'violet'},
    {value: 100000000, name: 'grey (x100M)', color: 'grey'},
    {value: 1000000000, name: 'white (x1G)', color: 'white'},
  ];
  tolerances : Array<SelectItem> = [
    {value: 0.05, name: 'grey (0.05%)', color: 'grey'},
    {value: 0.1, name: 'violet (0.1%)', color: 'violet'},
    {value: 0.25, name: 'blue (0.25%)', color: 'blue'},
    {value: 0.5, name: 'green (0.5%)', color: 'green'},
    {value: 1, name: 'brown (1%)', color: 'brown'},
    {value: 2, name: 'red (2%)', color: 'red'},
    {value: 5, name: 'gold (5%)', color: 'gold'},
    {value: 10, name: 'silver (10%)', color: 'silver'},
    {value: 20, name: 'none (20%)', color: 'none'},
  ];
}