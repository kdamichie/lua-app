import { Lightning, Utils } from '@lightningjs/sdk';

export default class Splash extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      src: Utils.asset('images/sb-background.png'),
      zIndex: -20,

      Logo: {
        src: 'images/sb-loading.png',
        mount: 0.5,
        x: 1020,
        y: 625,
        w: 350,
        h: 350
      }
    };
  }

  _init() {
    this._pulse = this.tag('Logo').animation({
      duration: 1,
      repeat: 1,
      actions: [{ p: 'alpha', v: { 0: 0, 0.5: 1, 1: 0 } }]
    });

    this._pulse.on('finish', () => {
      this.signal('loaded');
    });
  }

  _active() {
    this._pulse.start();
  }
}
