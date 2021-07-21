import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content h1')).getText() as Promise<string>;
  }

  getToleranceColorName(): Promise<string> { return element(by.id('toleranceColorName')).getText() as Promise<string>; }
  getMultiplierColorName(): Promise<string> { return element(by.id('multiplierColorName')).getText() as Promise<string>; }
  getDigit3ColorName(): Promise<string> { return element(by.id('digit3ColorName')).getText() as Promise<string>; }
  getDigit2ColorName(): Promise<string> { return element(by.id('digit2ColorName')).getText() as Promise<string>; }
  getDigit1ColorName(): Promise<string> { return element(by.id('digit1ColorName')).getText() as Promise<string>; }
  getResults  (): Promise<string> { return element(by.id('results')).getText() as Promise<string>; }
  
  setTolerance(val): void { element(by.id('tolerance')).element(by.cssContainingText('option', val)).click(); }
  setMultiplier(val): void { element(by.id('multiplier')).element(by.cssContainingText('option', val)).click(); }
  setDigit3(val): void { element(by.id('digit3')).element(by.cssContainingText('option', val)).click(); }
  setDigit2(val): void { element(by.id('digit2')).element(by.cssContainingText('option', val)).click(); }
  setDigit1(val): void { element(by.id('digit1')).element(by.cssContainingText('option', val)).click(); }
}
