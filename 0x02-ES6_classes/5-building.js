export default class Building {
  constructor(sqft) {
    /*
    if (this.constructor === Building) {
      throw new Error("Class is of abstract type and can't be instantiated");
    }
    */
    if ((this.evacuationWarningMessage === undefined) && (this.constructor !== Building)) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof (newSqft) !== 'number') {
      throw new TypeError('sqft must be a number');
    } else {
      this._sqft = newSqft;
    }
  }
}
