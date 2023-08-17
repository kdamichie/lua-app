import { Lightning } from '@lightningjs/sdk';

export default class Instructions extends Lightning.Component {
  static _template() {
    return {
      Logo: {
        x: 20,
        y: -35,
        h: 100,
        text: {
          text: 'Controls',
          fontSize: 24,
          fontColor: '00ff00'
        },

        Directions: {
          y: 35,
          w: 80,
          h: 80,
          src: 'images/lua-remote-arrows.png'
        },

        Esc: {
          x: 100,
          y: 35,
          w: 80,
          h: 80,
          src: 'images/lua-remote-back.png'
        }
      }
    };
  }
}
