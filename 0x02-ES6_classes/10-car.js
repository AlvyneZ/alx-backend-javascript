export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    if (typeof (newBrand) !== 'string') {
      throw new TypeError('Brand must be a string');
    } else {
      this._brand = newBrand;
    }
  }

  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    if (typeof (newMotor) !== 'string') {
      throw new TypeError('Motor must be a string');
    } else {
      this._motor = newMotor;
    }
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    if (typeof (newColor) !== 'string') {
      throw new TypeError('color must be a string');
    } else {
      this._color = newColor;
    }
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
