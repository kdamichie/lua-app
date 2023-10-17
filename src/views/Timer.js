import lng from '@lightningjs/core';

export default class Timer extends lng.Component {
  static _template() {
    return {
      Description: {
        y: 20,
        x: 1680,
        text: {
          fontSize: 50,
          fontStyle: 'bold',
          text: 'Ad Time'
        }
      },

      Countdown: {
        y: 60,
        x: 1750,
        text: {
          fontSize: 100,
          fontStyle: 'bold',
          text: '30'
        }
      }
    };
  }

  _countdown() {
    this.countdown = 30;
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this.countdownInterval);
        this.countdown = '0';
      }
      this.tag('Countdown').text.text = this.countdown;
    }, 1000);
  }

  _checkIfTimeZero() {
    let timeZero = false;
    console.log(this.countdown);
    if (this.countdown <= 0) {
      timeZero = true;
    }
    return timeZero;
  }

  _clearcountdown() {
    clearInterval(this.countdownInterval);
    this.tag('Countdown').text.text = '';
  }
}
