import { MetadataCardContent } from '@lightningjs/ui-components';

const seconds = 30;
export default class Timer extends lng.Component {
  static _template() {
    //Testing timer functionality
    //Needs to be call later, currently started when video starts
    timer(30);
    return {
      MetadataCardContent: {
        type: MetadataCardContent,
        w: 600,
        h: 250,
        //position is not working. CardTest is staying is upper left hand corner
        position: (500, 200),
        title: 'The game will start in ...',
        description: '30'
        //   details: 'Details',
      }
    };
  }

  //  static _redraw(secondsLeft) {
  //     console.log('_redraw:' + secondsLeft.toString());
  //     this.description = secondsLeft.toString();
  //     // this.myCard.description = secondsLeft.toString();
  //     //TimerCard._template().MetadataCardContent.description = secondsLeft.toString();
  // }
}

let countdown;
function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  console.log('IN TIMER FUNCTION');
  const nowMilliseconds = Date.now();
  const targetMilliseconds = nowMilliseconds + seconds * 1000;
  //displayTimeLeft(seconds);
  //displayEndTime(targetMilliseconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((targetMilliseconds - Date.now()) / 1000);
    // check if we should stop it!
    if (secondsLeft < 0) {
      console.log('NO SECONDS LEFT');
      clearInterval(countdown);
      return;
    }
    // display it
    console.log(secondsLeft);

    //      TimerCard._redraw(secondsLeft);
    displayTimeLeft(secondsLeft);
  }, 1000);
}
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  //description.text = remainderSeconds;
  //timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  // endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  console.log('Start timer method');
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}
