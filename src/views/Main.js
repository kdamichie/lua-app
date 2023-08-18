import { Lightning } from '@lightningjs/sdk';
import Menu from '../components/main-menu/Menu';

export default class Main extends Lightning.Component {
  static _template() {
    return {
      Logo: {
        src: 'images/sb-ttt-title.png',
        mount: 0.5,
        x: 1020,
        y: 150,
        w: 1500,
        h: 1000,
        shader: { type: Lightning.shaders.FadeOut, fade: 20 }
      },

      Menu: {
        x: 800,
        y: 500,
        type: Menu,
        items: [
          { label: 'New Game', action: 'start' },
          { label: 'Continue', action: 'continue' },
          { label: 'About', action: 'about' },
          { label: 'Exit', action: 'exit' }
        ]
      }
    };
  }

  _getFocused() {
    return this.tag('Menu');
  }

  _handleEnter() {
    this.signal('select', { item: this.tag('Menu').activeItem });
  }
}
