import { Lightning, VideoPlayer } from '@lightningjs/sdk';

const videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
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
    VideoPlayer.open(videoUrl);
    console.log(VideoPlayer);
    VideoPlayer.show();
  }
  _handleEnter() {
    VideoPlayer.playPause();
  }

  hidePlayer() {
    VideoPlayer.playPause();
    VideoPlayer.hide();
  }

  showPlayer() {
    VideoPlayer.open(videoUrl);
    VideoPlayer.show;
    VideoPlayer.playPause();
  }
}

//notes:
// set timeout,set state to main menu
// metrological sdk
// method for parent to call to fire video player, hide method, pause etc.
// don't unload to resume from same place
// }
