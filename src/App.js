import { Lightning, Utils } from '@lightningjs/sdk';
import { FONT_FAMILY } from './constants/style';
import Game from './views/Game';
import Main from './views/Main';
import Intro from './views/Intro';
import Splash from './views/Splash';

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: FONT_FAMILY, url: Utils.asset('fonts/KrabbyPatty.ttf') }];
  }

  static _template() {
    console.log('started');
    return {
      rect: true,
      w: 1920,
      h: 1080,
      src: Utils.asset('images/xfg-background.png'),
      zIndex: -20,

      Intro: {
        type: Intro,
        alpha: 0,
        signals: { select: 'menuSelect' }
      },

      Splash: {
        type: Splash,
        alpha: 0,
        signals: { loaded: true }
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
      }
    };
  }

  _setup() {
    this._setState('Intro');
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
          this._setState('Splash');
        }

        exit() {
          this.application.closeApp();
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

      class Splash extends this {
        $enter() {
          this.tag('Splash').setSmooth('alpha', 1);
        }

        $exit() {
          this.tag('Splash').setSmooth('alpha', 0);
        }

        loaded() {
          let themeMusic = new Audio('sounds/sb-theme.mp3');
          themeMusic.muted = false;
          themeMusic.play();
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
          this.application.closeApp();
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
      }
    ];
  }
}
