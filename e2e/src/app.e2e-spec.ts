import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to Resistance Calculator!');
  });

  it('should set result value correctly when set to sample values from assignment', () => {
    page.navigateTo();
    page.setDigit1('grey');
    page.setDigit2('blue');
    page.setDigit3('green');
    page.setMultiplier('blue');
    page.setTolerance('violet');
    expect(page.getResults()).toEqual('865M +/- 0.1%');
  });

  it('should set result value correctly when set to minimum value possible', () => {
    page.navigateTo();
    page.setDigit1('black');
    page.setDigit2('black');
    page.setDigit3('black');
    page.setMultiplier('silver');
    page.setTolerance('grey');
    expect(page.getResults()).toEqual('0 +/- 0.05%');
  });

  it('should set result value correctly when set to minimum non zero value possible', () => {
    page.navigateTo();
    page.setDigit1('black');
    page.setDigit2('black');
    page.setDigit3('brown');
    page.setMultiplier('silver');
    page.setTolerance('grey');
    expect(page.getResults()).toEqual('0.01 +/- 0.05%');
  });

  it('should set result value correctly when set to maximum value possible', () => {
    page.navigateTo();
    page.setDigit1('white');
    page.setDigit2('white');
    page.setDigit3('white');
    page.setMultiplier('white');
    page.setTolerance('none');
    expect(page.getResults()).toEqual('999G +/- 20%');
  });

  it('should set result value correctly when set to maximum value possible', () => {
    page.navigateTo();
    page.setDigit1('white');
    page.setDigit2('white');
    page.setDigit3('white');
    page.setMultiplier('white');
    page.setTolerance('none');
    expect(page.getResults()).toEqual('999G +/- 20%');
  });

  it('should set result value correctly when set to one possible encoding of 1K', () => {
    page.navigateTo();
    page.setDigit1('black');
    page.setDigit2('black');
    page.setDigit3('brown');
    page.setMultiplier('orange');
    page.setTolerance('brown');
    expect(page.getResults()).toEqual('1K +/- 1%');
  });

  it('should set result value correctly when set to another possible encoding of 1K', () => {
    page.navigateTo();
    page.setDigit1('black');
    page.setDigit2('brown');
    page.setDigit3('black');
    page.setMultiplier('red');
    page.setTolerance('red');
    expect(page.getResults()).toEqual('1K +/- 2%');
  });

  it('should set result value correctly when set to yet another possible encoding of 1K', () => {
    page.navigateTo();
    page.setDigit1('brown');
    page.setDigit2('black');
    page.setDigit3('black');
    page.setMultiplier('brown');
    page.setTolerance('gold');
    expect(page.getResults()).toEqual('1K +/- 5%');
  });

  afterEach(async () => {
  });
});
