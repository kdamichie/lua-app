import { Lightning } from '@lightningjs/sdk';

export default class Button extends Lightning.Component {
  static _template() {
    return {
      w: 441,
      h: 104
    };
  }

  _focus() {
    this.patch({
      smooth: { scale: 1.1 }
    });
  }

  _unfocus() {
    this.patch({
      smooth: { scale: 1.0 }
    });
  }
}
