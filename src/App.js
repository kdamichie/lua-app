import { Lightning, Utils, Colors } from '@lightningjs/sdk';
import { FONT_FAMILY } from './constants/style';

import Credits from './views/Credits';
import Game from './views/Game';
import Intro from './views/Intro';
import Load from './views/Load';
import Main from './views/Main';
import Player1 from './views/Player1';
import Player2 from './views/Player2';
import Timer from './views/Timer';

// let themeMusic = new Audio('sounds/sb-theme.mp3');

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: FONT_FAMILY, url: Utils.asset('fonts/KrabbyPatty.ttf') }];
  }

  static _template() {
    return {
      Intro: {
        type: Intro,
        alpha: 0,
        signals: { select: 'menuSelect' }
      },

      Load: {
        type: Load,
        alpha: 0,
        signals: { loaded: true }
      },

      Timer: {
        type: Timer,
        alpha: 0
      },

      Main: {
        type: Main,
        alpha: 0,
        signals: { select: 'menuSelect' }
      },

      Game: {
        type: Game,
        alpha: 0,
        signals: { back: 'back' }
      },

      Player1: {
        type: Player1,
        alpha: 0
      },

      Player2: {
        type: Player2,
        alpha: 0
      },

      Credits: {
        type: Credits,
        alpha: 0
      }
    };
  }

  _setup() {
    this._setState('Player1');
  }

  static _states() {
    return [
      class Intro extends this {
        $enter() {
          this.tag('Intro').patch({
            smooth: { alpha: 1, y: 0 }
          });
        }

        $exit() {
          this.tag('Intro').patch({
            smooth: { alpha: 0, y: 100 }
          });
        }

        _getFocused() {
          return this.tag('Intro');
        }

        start() {
          this._setState('Load');
        }

        exit() {
          this.application.closeApp();
        }

        menuSelect({ item }) {
          if (item.constructor.name == 'StartButton') {
            this._setState('Load');
          } else if (item.constructor.name == 'SkipButton') {
            this._setState('Player2');
          }
        }
      },

      class Load extends this {
        $enter() {
          this.tag('Load').setSmooth('alpha', 1);
        }

        $exit() {
          this.tag('Load').setSmooth('alpha', 0);
        }

        loaded() {
          // themeMusic.muted = false;
          // themeMusic.play();
          this.tag('Timer').setSmooth('alpha', 1);
          this.tag('Timer')._countdown();
          this._setState('Main');
        }
      },

      class Main extends this {
        $enter() {
          this.tag('Main').patch({
            smooth: { alpha: 1, y: 0 }
          });
        }

        $exit() {
          this.tag('Main').patch({
            smooth: { alpha: 0, y: 100 }
          });
        }

        _getFocused() {
          return this.tag('Main');
        }

        start() {
          this._setState('Game');
        }

        exit() {
          if (this.tag('Timer')._checkIfTimeZero()) {
            // themeMusic.pause();
            this.tag('Timer').setSmooth('alpha', 0);
            this.tag('Timer')._clearcountdown();
            this._setState('Player2');
          } else {
            console.log('ad time not finished');
            return false;
          }
        }

        menuSelect({ item }) {
          if (this._hasMethod(item.action)) {
            return this[item.action]();
          } else if (item.action) {
            window.location.href = item.action;
          } else {
            this._setState('Intro');
          }
        }
      },

      class Game extends this {
        $enter() {
          this.tag('Game').setSmooth('alpha', 1);
        }

        $exit() {
          this.tag('Game').setSmooth('alpha', 0);
        }

        _getFocused() {
          return this.tag('Game');
        }

        back() {
          this._setState('Main');
        }
      },

      class Player1 extends this {
        $enter() {
          this.tag('Player1').setSmooth('alpha', 1);
          this.timeout = setTimeout(() => {
            this.tag('Player1').hidePlayer();
            this._setState('Intro');
          }, 8150);
        }
        $exit() {
          this.tag('Player1').setSmooth('alpha', 0);
        }
        _getFocused() {
          return this.tag('Player1');
        }
        _handleEnter() {
          this._setState('Player1');
        }
      },

      class Player2 extends this {
        $enter() {
          this.tag('Player2').setSmooth('alpha', 1);
          this.timeout = setTimeout(() => {
            this.tag('Player2').hidePlayer();
            this._setState('Credits');
          }, 7700);
        }
        $exit() {
          this.tag('Player2').setSmooth('alpha', 0);
        }
        _getFocused() {
          return this.tag('Player2');
        }
        _handleEnter() {
          this._setState('Player2');
        }
      },

      class Credits extends this {
        $enter() {
          this.tag('Credits').patch({
            smooth: { alpha: 1, y: 0 }
          });
        }
        _handleEnter() {
          location.reload();
        }

        _getFocused() {
          return this.tag('Credits');
        }

        start() {
          location.reload();
        }

        exit() {
          this.application.closeApp();
        }
      }
    ];
  }
}
