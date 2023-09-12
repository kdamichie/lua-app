import { Lightning } from '@lightningjs/sdk';
import MenuItem from '../intro-menu/MenuItem';

export default class Menu extends Lightning.Component {
  static _template() {
    return {
      Items: {
        Button1: {
          x: -26,
          y: 236,
          mountY: 0.5,
          type: Button,
          src: 'images/xfg-play.png'
        },
        Button2: {
          x: -26,
          y: 392,
          mountY: 0.5,
          type: Button,
          src: 'images/xfg-skip.png',
          smooth: { color: 0xff905fb2 }
        }
      }
    };
  }

  _init() {
    this._setState('Button1');
    this._disable('Button2');
  }

  static _states() {
    return [
      class Button1 extends this {
        _getFocused() {
          return this.tag('Button1');
        }
        _handleDown() {
          this._setState('Button2');
        }
        _handleUp() {
          this._setState('Button2');
        }
      },
      class Button2 extends this {
        _getFocused() {
          return this.tag('Button2');
        }
        _handleUp() {
          this._setState('Button1');
        }
        _handleDown() {
          this._setState('Button1');
        }
      }
    ];
  }
}

class Button extends Lightning.Component {
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
