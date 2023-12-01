export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    if (typeof (newSize) !== 'number') {
      throw new TypeError('Size must be a number');
    } else {
      this._size = newSize;
    }
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    if (typeof (newLocation) !== 'string') {
      throw new TypeError('location must be a string');
    } else {
      this._location = newLocation;
    }
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
