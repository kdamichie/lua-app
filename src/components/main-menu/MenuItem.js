import { Lightning } from '@lightningjs/sdk';
import { FONT_COLOR, FONT_FAMILY } from '../../constants/style';

export default class MenuItem extends Lightning.Component {
  static _template() {
    return {
      text: { text: '', fontFace: FONT_FAMILY, fontSize: 50, textColor: FONT_COLOR }
    };
  }

  set label(label) {
    this.text.text = label;
  }

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
