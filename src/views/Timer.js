import lng from '@lightningjs/core';
import { FONT_COLOR, FONT_FAMILY } from '../constants/style';
import { Utils } from '@lightningjs/sdk';

export default class Timer extends lng.Component {
  static getFonts() {
    return [{ family: FONT_FAMILY, url: Utils.asset('fonts/KrabbyPatty.ttf') }];
  }
  static _template() {
    return {
      Description: {
        y: 45,
        x: 1625,
        text: {
          fontSize: 100,
          text: '',
          textColor: FONT_COLOR
        }
      }
    };
  }

  _init() {
    let countdown = 60;
    this.countdownInterval = setInterval(() => {
      countdown--;
      if (countdown === 0) {
        clearInterval(this.countdownInterval);
      }
      this.tag('Description').text.text = ':' + countdown;
      console.log(countdown);
    }, 1000);
  }
}
