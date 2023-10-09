import { Lightning, Utils } from '@lightningjs/sdk';
import { FONT_FAMILY } from './constants/style';
import Game from './views/Game';
import Main from './views/Main';
import Intro from './views/Intro';
import Splash from './views/Splash';
import Player from './views/Player';
import Timer from './views/Timer';

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: FONT_FAMILY, url: Utils.asset('fonts/KrabbyPatty.ttf') }];
  }

  static _template() {
    console.log('started');
    return {
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
      },
      Player: {
        type: Player,
        alpha: 0
      },
      Timer: {
        type: Timer,
        alpha: 0
      }
    };
  }

  _setup() {
    console.log('SETUP');
    this._setState('Player');
    this.tag('Player').showPlayer1();
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
          console.log('Kurt');
          this._setState('Splash');
        }

        exit() {
          this.application.closeApp();
        }

        menuSelect({ item }) {
          console.log('HERE', item.constructor.name);
          if (item.constructor.name == 'StartButton') {
            console.log('Kurt1');
            this._setState('Splash');
          } else if (item.constructor.name == 'SkipButton') {
            console.log('Kurt1');
            this._setState('Game');
          } else {
            console.log('Fallthrough');
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
          this.timeout = setTimeout(() => {
            themeMusic.pause();
          }, 32000);
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
          this.tag('Timer').setSmooth('alpha', 1);
          this.tag('Timer')._countdown();
          this.timeout = setTimeout(() => {
            console.log('set timeout for game');
            this._setState('Player');
            this.tag('Player').showPlayer2();
          }, 30000);
        }

        $exit() {
          this.tag('Game').setSmooth('alpha', 0);
          this.tag('Timer').setSmooth('alpha', 0);
        }

        _getFocused() {
          return this.tag('Game');
        }

        back() {
          this._setState('Main');
        }
      },

      class Player extends this {
        $enter() {
          this.tag('Player').setSmooth('alpha', 1);
          this.timeout = setTimeout(() => {
            console.log('set state main after timeout');
            this.tag('Player').hidePlayer();

            this._setState('Intro');
          }, 8000);
        }
        $exit() {
          //         this.tag(Player)._playPause();
          this.tag('Player').setSmooth('alpha', 0);
        }
        _getFocused() {
          return this.tag('Player');
        }
        _handleEnter() {
          this._setState('Player');
        }
        _handleMenu() {
          this._setState('Main');
        }
        _handleBack() {
          this._setState('Main');
        }
      }
    ];
  }
}
