// eslint-disable-next-line import/extensions
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    if (typeof (newFloors) !== 'number') {
      throw new TypeError('floors must be a number');
    } else {
      this._floors = newFloors;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    return 'Evacuate slowly the NUMBER_OF_FLOORS floors';
  }
}
