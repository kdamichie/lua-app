import { Colors, Lightning } from '@lightningjs/sdk';

export default class Splash extends Lightning.Component {
  static _template() {
    return {
      Logo: {
        src: 'images/sb-loading.png',
        mount: 0.5,
        x: 1020,
        y: 625,
        w: 350,
        h: 350
        // shader: { type: Lightning.shaders.FadeOut, fade: 20 }
      }
    };
  }

  _init() {
    // create animation and store a reference, so we can start / stop / pause in the fututre
    this._pulse = this.tag('Logo').animation({
      duration: 1,
      repeat: 1,
      actions: [{ p: 'alpha', v: { 0: 0, 0.5: 1, 1: 0 } }]
    });

    // add a finish eventlistener, so we can send a signal
    // to the parent when the animation is completed
    this._pulse.on('finish', () => {
      this.signal('loaded');
    });

    // start the animation
    this._pulse.start();
  }

  _active() {
    this._pulse.start();
  }
}
