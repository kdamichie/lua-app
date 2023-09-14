import { Lightning, Utils } from '@lightningjs/sdk';
import Menu from '../components/main-menu/Menu';

export default class Main extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      src: Utils.asset('images/sb-background.png'),
      zIndex: -20,

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
        items: [{ action: 'start' }, { action: 'https://gamex.np.gpe.xfinity.com/#play' }, { action: 'exit' }],
        Logo: {
          src: 'images/sb-menu.png',
          mount: 0.5,
          x: 290,
          y: 115,
          w: 600,
          h: 275
        }
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
