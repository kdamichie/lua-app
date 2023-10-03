import { Lightning, VideoPlayer } from '@lightningjs/sdk';

const videoUrl1 = 'videos/Ad1a.mov';
const videoUrl2 = 'videos/Ad2a.mov';
const timeout = 15000;

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
    VideoPlayer.open(videoUrl1);
    console.log(VideoPlayer);
    VideoPlayer.show();
    VideoPlayer.loop(false);
  }
  _handleEnter() {
    VideoPlayer.playPause();
  }

  _playPause() {
    VideoPlayer.playPause();
  }
  hidePlayer() {
    VideoPlayer.playPause();
    VideoPlayer.hide();
  }

  showPlayer1() {
    VideoPlayer.open(videoUrl1);
    VideoPlayer.show;
    VideoPlayer.playPause();
    VideoPlayer.loop(false);
  }

  showPlayer2() {
    VideoPlayer.open(videoUrl2);
    VideoPlayer.show;
    VideoPlayer.loop(false);
  }
}

//notes:
// set timeout,set state to main menu
// metrological sdk
// method for parent to call to fire video player, hide method, pause etc.
// don't unload to resume from same place
// }
