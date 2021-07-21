import { TestBed, async } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { Values } from './values';

describe('CalculatorService', () => {
  let service: CalculatorService;
  beforeEach(() => { service = new CalculatorService(); });

  it('getResult should return correct result for sample input from assignment', done => {
    service.getResult(new Values(8,6,5,1000000,0.1)).subscribe(
      result => {
        expect(result).toBe('865M +/- 0.1%');
        done();
      }
    );    
  });

  it('getResult should return correct result for one way of encoding 1K', done => {
    service.getResult(new Values(0,1,0,100,1)).subscribe(
      result => {
        expect(result).toBe('1K +/- 1%');
        done();
      }
    );    
  });

  it('getResult should return correct result for another way of encoding 1K', done => {
    service.getResult(new Values(1,0,0,10,2)).subscribe(
      result => {
        expect(result).toBe('1K +/- 2%');
        done();
      }
    );    
  });

  it('getResult should return correct result for yet another way of encoding 1K', done => {
    service.getResult(new Values(0,0,1,1000,0.5)).subscribe(
      result => {
        expect(result).toBe('1K +/- 0.5%');
        done();
      }
    );    
  });

  it('getResult should return correct result for smallest value', done => {
    service.getResult(new Values(0,0,1,0.01,0.05)).subscribe(
      result => {
        expect(result).toBe('0.01 +/- 0.05%');
        done();
      }
    );    
  });


  it('getResult should return correct result for largest value', done => {
    service.getResult(new Values(9,9,9,1000000000,20)).subscribe(
      result => {
        expect(result).toBe('999G +/- 20%');
        done();
      }
    );    
  });

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

  it('multipliers should be properly populated', () => {
    expect(service.multipliers).toEqual([
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
    ]);
  });

  it('tolerances should be properly populated', () => {
    expect(service.tolerances).toEqual([
      {value: 0.05, name: 'grey (0.05%)', color: 'grey'},
      {value: 0.1, name: 'violet (0.1%)', color: 'violet'},
      {value: 0.25, name: 'blue (0.25%)', color: 'blue'},
      {value: 0.5, name: 'green (0.5%)', color: 'green'},
      {value: 1, name: 'brown (1%)', color: 'brown'},
      {value: 2, name: 'red (2%)', color: 'red'},
      {value: 5, name: 'gold (5%)', color: 'gold'},
      {value: 10, name: 'silver (10%)', color: 'silver'},
      {value: 20, name: 'none (20%)', color: 'none'},
    ]);
  });
});
