import { Lightning } from '@lightningjs/sdk';

export default class Menu extends Lightning.Component {
  _init() {
    this._setState('StartButton');
  }

  static _states() {
    return [
      class StartButton extends this {
        _getFocused() {
          return this.tag('StartButton');
        }
        _handleDown() {
          this._setState('SkipButton');
        }
        _handleUp() {
          this._setState('SkipButton');
        }
      },
      class SkipButton extends this {
        _getFocused() {
          return this.tag('SkipButton');
        }
        _handleUp() {
          this._setState('StartButton');
        }
        _handleDown() {
          this._setState('StartButton');
        }
      }
    ];
  }
}
