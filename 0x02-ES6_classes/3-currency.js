export default class Currency {
  constructor(code, name) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof (newName) !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = newName;
    }
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof (newCode) !== 'string') {
      throw new TypeError('code must be a string');
    } else {
      this._code = newCode;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
