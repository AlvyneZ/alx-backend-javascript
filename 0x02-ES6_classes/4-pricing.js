// eslint-disable-next-line import/extensions
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.currency = currency;
    this.amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('currency must be a Currency object');
    } else {
      this._currency = newCurrency;
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof (newAmount) !== 'number') {
      throw new TypeError('amount must be a number');
    } else {
      this._amount = newAmount;
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
