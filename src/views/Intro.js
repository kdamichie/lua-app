import { Lightning, Utils } from '@lightningjs/sdk';
import Menu from '../components/intro-menu/Menu';
import Button from '../components/intro-menu/Button';

export default class Intro extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      src: Utils.asset('images/xfg-background.png'),
      zIndex: -20,

      IntroImage: {
        src: 'images/xfg-intro.png',
        mount: 0.5,
        x: 994,
        y: 354,
        w: 1123,
        h: 491
      },

      Menu: {
        x: 800,
        y: 500,
        type: Menu,
        Items: {
          StartButton: {
            x: -26,
            y: 236,
            mountY: 0.5,
            type: Button,
            src: 'images/xfg-play.png'
          },
          SkipButton: {
            x: -26,
            y: 392,
            mountY: 0.5,
            type: Button,
            src: 'images/xfg-skip.png'
          }
        }
      }
    };
  }

  _getFocused() {
    return this.tag('Menu');
  }

  _handleEnter() {
    this.signal('select', { item: this.tag('Menu') });
  }
}
