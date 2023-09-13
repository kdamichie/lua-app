import { Lightning } from '@lightningjs/sdk';

export default class MenuItem extends Lightning.Component {
  set action(action) {
    this._action = action;
  }

  set href(href) {
    this._href = href;
  }

  get action() {
    return this._action;
  }

  get href() {
    return this._href;
  }
}
