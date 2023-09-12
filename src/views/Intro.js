import { Lightning } from '@lightningjs/sdk';
import Menu from '../components/intro-menu/Menu';

export default class Intro extends Lightning.Component {
  static _template() {
    return {
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
        items: [
          { label: '', action: 'start' },
          { label: '', action: 'exit' }
        ]
      }
    };
  }

  _getFocused() {
    return this.tag('Menu');
  }

  _handleEnter() {
    console.log('Enter');
    this.signal('start');
  }
}
