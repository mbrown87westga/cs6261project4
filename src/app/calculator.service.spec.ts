import { TestBed, async } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  beforeEach(() => { service = new CalculatorService(); });

  it('digits should be properly populated', () => {
    expect(service.digits).toEqual([
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
    ]);
  });
});
