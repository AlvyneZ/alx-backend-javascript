// eslint-disable-next-line import/extensions
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(newRange) {
    if (typeof (newRange) !== 'string') {
      throw new TypeError('Range must be a string');
    } else {
      this._range = newRange;
    }
  }

  static get [Symbol.species]() {
    return Car;
  }
}
