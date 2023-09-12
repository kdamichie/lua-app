import { Lightning, VideoPlayer } from '@lightningjs/sdk';

const videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
//const timeout = 3000;
export default class Player extends Lightning.Component {
  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080
      }
    };
  }

  _firstActive() {
    console.log(VideoPlayer);
    VideoPlayer.consumer(this);
    VideoPlayer.open(videoUrl);
    console.log(VideoPlayer);
    VideoPlayer.show();

    //ERROR- VideoPlayer.setTimeout is not a function
    // VideoPlayer.setTimeout(() => {
    //   console.log('TIMEOUT');
    //   this._setState('Main');
    // }, timeout);

    // set timeout,set state to main menu
    //metrological sdk
    // method for parent to call to fire video player, hide method, pause etc.
    // don't unload to resume from same place
  }

  _handleEnter() {
    VideoPlayer.playPause();
  }
}
