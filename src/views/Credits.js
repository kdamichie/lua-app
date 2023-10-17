import { Lightning, Utils } from '@lightningjs/sdk';

export default class Credits extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      src: Utils.asset('images/xfg-background.png'),
      zIndex: -20,

      CreditsImage: {
        src: 'images/credits-thanks.png',
        mount: 0.5,
        x: 996,
        y: 504,
        w: 1416,
        h: 1028
      }
    };
  }

  _handleEnter() {
    location.reload();
  }
}
