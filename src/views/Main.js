import { Lightning } from '@lightningjs/sdk';
import Logo from '../components/logo';
import Menu from '../components/main-menu/Menu';

export default class Main extends Lightning.Component {
  static _template() {
    return {
      Logo: {
        type: Logo,
        mount: 0.5,
        x: 960,
        y: 300,
        w: 300,
        h: 300,
        shader: { type: Lightning.shaders.FadeOut, fade: 20 }
      },

      Menu: {
        x: 800,
        y: 600,
        type: Menu,
        items: [
          { label: 'New Game', action: 'start' },
          { label: 'Continue Last Game', action: 'continue' },
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
